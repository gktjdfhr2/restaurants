package com.worst.restmap.config.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.domain.entity.Token;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.repository.TokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;


@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;
    private final TokenProvider tokenProvider;
    private ObjectMapper om = new ObjectMapper();


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            Member member = om.readValue(request.getInputStream(), Member.class);
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(member.getMemberEmail(), member.getMemberPassword());

            Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
            CustomUserDetail customUserDetail = (CustomUserDetail) authentication.getPrincipal();
            return authentication;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        CustomUserDetail customUserDetail = (CustomUserDetail) authResult.getPrincipal();
//        Member member = memberRepository.findByMemberEmail(authResult.getPrincipal());

        String jwtToken = tokenProvider.createAccessToken(customUserDetail.getUsername());
        String refreshToken = tokenProvider.createRefreshToken();

        Token token = Token.builder().tokenMemberEmail(customUserDetail.getUsername()).tokenRefreshToken(refreshToken).build();
        tokenRepository.save(token);
//        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
//        response.addHeader(JwtProperties.REFRESH_HEADER_STRING, refreshToken);
        response.setHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
        response.setHeader(JwtProperties.REFRESH_HEADER_STRING, refreshToken);
        String getRole = customUserDetail.getMember().getMemberRole();
        String getName = customUserDetail.getMember().getMemberName();
        StatusCode statusCode = null;
        if(getRole.equals("0")) {
            statusCode = StatusCode.builder().resCode("0").data(Member.builder().memberRole(getRole).memberName(getName).build()).resMsg("로그인 성공").build();
        } else if(getRole.equals("1")) {
            statusCode = StatusCode.builder().resCode("0").data(Member.builder().memberRole(getRole).memberName(getName).build()).resMsg("로그인 성공").build();
        } else {
            StatusCode.builder().resCode("0").data(Member.builder().memberRole(getRole).memberName(getName).build()).resMsg("로그인 성공").build();
        }
        String result = om.writeValueAsString(statusCode);
        response.getWriter().write(result);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        StatusCode statusCode = StatusCode.builder().resCode("1").resMsg("유효하지 않은 사용자 입니다.").build();
        String result = om.writeValueAsString(statusCode);
        response.getWriter().write(result);
    }
}
