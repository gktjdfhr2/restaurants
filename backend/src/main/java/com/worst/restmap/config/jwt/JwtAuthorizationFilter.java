package com.worst.restmap.config.jwt;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.el.parser.Token;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
    private UserRepository userRepository;
    private TokenProvider tokenProvider;
    private StatusCode statusCode;
    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository, TokenProvider tokenProvider){
        super(authenticationManager);
        this.userRepository = userRepository;
        this.tokenProvider = tokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        
    }
}
