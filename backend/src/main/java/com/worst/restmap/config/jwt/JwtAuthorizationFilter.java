package com.worst.restmap.config.jwt;

import com.auth0.jwt.JWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.repository.TokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;


public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
    private MemberRepository memberRepository;
    private TokenRepository tokenRepository;
    private ObjectMapper om = new ObjectMapper();
    private TokenProvider tokenProvider;
    private StatusCode statusCode = new StatusCode();

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, MemberRepository memberRepository, TokenRepository tokenRepository, TokenProvider tokenProvider) {
        super(authenticationManager);
        this.memberRepository = memberRepository;
        this.tokenRepository = tokenRepository;
        this.tokenProvider = tokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String jwtHeader = tokenProvider.resolveJwtToken(request);

        if (jwtHeader == null || !jwtHeader.startsWith(JwtProperties.TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }

        String accessToken = jwtHeader.replace(JwtProperties.TOKEN_PREFIX, "");

        if (tokenProvider.accessTokenValid(accessToken)) {
            String memberEmail = tokenProvider.getVerifyToken(accessToken).getClaim("memberEmail").asString();

            if(memberEmail != null && !memberEmail.equals((""))) {
                Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);
                CustomUserDetail customUserDetail = new CustomUserDetail(member);

                Authentication authentication = new UsernamePasswordAuthenticationToken(customUserDetail, null, customUserDetail.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
                chain.doFilter(request, response);
            } else {
                statusCode.setResCode(888); statusCode.setResMsg("[ERR] ACCESS TOKEN 사용자 정보 에러");
                String result = om.writeValueAsString(statusCode);
                response.getWriter().write(result);
            }
        }
        else {
            if(request.getHeader(JwtProperties.REFRESH_HEADER_STRING) != null) {
                String refresh = request.getHeader(JwtProperties.REFRESH_HEADER_STRING);
                String memberEmail = JWT.decode(accessToken).getClaim("memberEmail").asString();
                if(refresh.equals(tokenRepository.findByMemberEmail(memberEmail))){
                    String reissueAccessToken = tokenProvider.createAccessToken(memberEmail);
                    statusCode.setResCode(999); statusCode.setResMsg("만료된 Refresh Token");
                }
            }
        }
    }
}
