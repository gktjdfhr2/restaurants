package com.worst.restmap.config;


import com.worst.restmap.config.jwt.JwtAuthenticationFilter;
import com.worst.restmap.config.jwt.JwtAuthorizationFilter;
import com.worst.restmap.config.jwt.TokenProvider;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final CorsFilter corsFilter;
    private final MemberRepository memberRepository;
    private final TokenRepository tokenRepository;
    private final TokenProvider tokenProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        //SpringSecurity Filter Setting
        httpSecurity
                .csrf().disable()
                .addFilter(corsFilter)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new JwtAuthenticationFilter(authentication -> authentication, memberRepository, tokenRepository,tokenProvider))
                .addFilter(new JwtAuthorizationFilter(authentication -> authentication, memberRepository,tokenRepository,tokenProvider))
                .formLogin().
                loginPage("/login").loginProcessingUrl("/api/signIn")
                .and()
                .authorizeHttpRequests()
                .requestMatchers("/api/signIn","/api/signUp", "/**").permitAll()
                .anyRequest().authenticated();
        return httpSecurity.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
