package com.worst.restmap.config.jwt;

public interface JwtProperties {

    String SECRET = "JWT_TOKEN";
    int ACCESS_EXPIRATION_TIME = 15000000;
    int REFRESH_EXPIRATION_TIME = 25000000;
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
    String REFRESH_HEADER_STRING = "Refresh_token";
}
