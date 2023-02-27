package com.worst.restmap.config.jwt;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class TokenProvider {

    public String createAccessToken(String memberEmail) {
        return JWT.create()
                .withSubject("jwt_token")
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.ACCESS_EXPIRATION_TIME))
                .withClaim("memberEmail", memberEmail)
                .sign(Algorithm.HMAC256(JwtProperties.SECRET));
    }

    public String createRefreshToken(){ // Refresh Token 생성 함수
        return JWT.create()
                .withExpiresAt(new Date(System.currentTimeMillis()  +JwtProperties.REFRESH_EXPIRATION_TIME) )
                .sign(Algorithm.HMAC256(JwtProperties.SECRET));
    }

    public String resolveJwtToken(HttpServletRequest request){ // Access Token 값 추출
        return request.getHeader(JwtProperties.HEADER_STRING);
    }

    public DecodedJWT getVerifyToken(String token){ // 토큰 검증
        return JWT.require(Algorithm.HMAC256(JwtProperties.SECRET)).build().verify(token);
    }

    public boolean accessTokenValid(String accessToken){ // AccessToken 유효성 확인
        try{
            return !getVerifyToken(accessToken).getExpiresAt().before(new Date());
        }catch (Exception e){
            return false;
        }
    }

    public boolean refreshTokenValid(String refreshToken){ // Refresh Token 유효성 확인
        try{
            return !getVerifyToken(refreshToken).getExpiresAt().before(new Date());
        }catch (Exception e){
            return false;
        }
    }
//    private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
//    private static final String AUTHORITIES_KEY = "auth";
//    private final String secret;
//    private final long tokenValidityInMilliseconds; //토큰 만료시간
//    private Key key;
//
//    public TokenProvider(
//            @Value("${jwt.secret}") String secret,
//            @Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds) {
//        this.secret = secret;
//        this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
//    }
//
//    public String createToken(Authentication authentication) {
//        String authorities = authentication.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(","));
//
//        long now = (new Date()).getTime();
//        Date validity = new Date(now + this.tokenValidityInMilliseconds);
//
//        return Jwts.builder()
//                .setSubject(authentication.getName())
//                .claim(AUTHORITIES_KEY, authorities)
//                .signWith(key, SignatureAlgorithm.HS512)
//                .setExpiration(validity)
//                .compact();
//    }
//
//    public Authentication getAuthentication(String token) {
//        Claims claims = Jwts
//                .parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//
//        Collection<? extends GrantedAuthority> authorities =
//                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
//                        .map(SimpleGrantedAuthority::new)
//                        .collect(Collectors.toList());
//
//        User principal = new User(claims.getSubject(), "", authorities);
//
//        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
//    }
//
//    @Override
//    public void afterPropertiesSet() throws Exception {
//        byte[] keyBytes = Decoders.BASE64.decode(secret);
//
//    }
//
//    public boolean validateToken(String token) {
//        try {
//            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
//            return true;
//        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
//            logger.info("잘못된 JWT 서명입니다.");
//        } catch (ExpiredJwtException e) {
//            logger.info("만료된 JWT 토큰입니다.");
//        } catch (UnsupportedJwtException e) {
//            logger.info("지원되지 않는 JWT 토큰입니다.");
//        } catch (IllegalArgumentException e) {
//            logger.info("JWT 토큰이 잘못되었습니다.");
//        }
//        return false;
//    }


}
