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
        else{
            // Access Token 만료된 경우
            System.out.println("[WARN] Expired Access Token");

            // 클라이언트가 Refresh Token을 들고 요청한 경우
            if(request.getHeader(JwtProperties.REFRESH_HEADER_STRING) != null){

                // Refresh 유효성(만료시간) 검사
                String refresh = request.getHeader(JwtProperties.REFRESH_HEADER_STRING);
                String memberEmail = JWT.decode(accessToken).getClaim("memberEmail").asString();
                // DB의 Refresh와 클라이언트에서 받은 Refresh 비교
                if(refresh.equals(tokenRepository.findByTokenMemberEmail(memberEmail).getTokenRefreshToken())){
                    System.out.println("[SUCCESS] 정상적인 Refresh Token");

                    if(tokenProvider.refreshTokenValid(refresh)){ // refresh token 만료 여부 확인
                        String reissueAccessToken = tokenProvider.createAccessToken(memberEmail);
                        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + reissueAccessToken);
                        statusCode.setResCode(555); statusCode.setResMsg("Access Token 재발급");
                        String result = om.writeValueAsString(statusCode);
                        response.getWriter().write(result);
                        return;
                    }else{
                        System.out.println("[WARN] Refresh Token 만료됨, 재로그인 요청");
                        tokenRepository.deleteByTokenMemberEmail(memberEmail);
                        statusCode.setResCode(999); statusCode.setResMsg("만료된 Refresh Token");
                        String result = om.writeValueAsString(statusCode);
                        response.getWriter().write(result);
                        return;
                    }
                }else{
                    System.out.println("[ERR] 비정상적인 Refresh Token");
                    tokenRepository.deleteByTokenMemberEmail(memberEmail); // DB에 존재하는 refresh token 삭제
                    statusCode.setResCode(777); statusCode.setResMsg("비정상적인 Refresh Token");
                    String result = om.writeValueAsString(statusCode);
                    response.getWriter().write(result);
                    return;
                }

            }else{
                statusCode.setResCode(666); statusCode.setResMsg("Access Token 만료됨");
                String result = om.writeValueAsString(statusCode);
                response.getWriter().write(result);
                return;
            }
        }
    }
}
