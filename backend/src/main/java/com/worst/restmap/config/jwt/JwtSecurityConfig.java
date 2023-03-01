//package com.worst.restmap.config.jwt;
//
//import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.web.DefaultSecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//public class JwtSecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
//
//    private TokenProvider tokenProvider;
//
//    public JwtSecurityConfig(TokenProvider tokenProvider) {
//        this.tokenProvider = tokenProvider;
//    }
//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        http.addFilterBefore(
//                new JwtFilter(tokenProvider), UsernamePasswordAuthenticationFilter.class
//        );
//
//    }
//}
