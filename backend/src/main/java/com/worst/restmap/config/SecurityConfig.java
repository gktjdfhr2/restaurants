package com.worst.restmap.config;


import com.worst.restmap.config.jwt.JwtAuthenticationFilter;
import com.worst.restmap.config.jwt.JwtAuthorizationFilter;
import com.worst.restmap.config.jwt.TokenProvider;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final CorsConfig corsConfig;
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
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new MyCustomDsl())
//                loginPage("/login").loginProcessingUrl("/api/signIn")
//                .usernameParameter("memberEmail")
//                .passwordParameter("memberPassword")
                .and()
                .authorizeHttpRequests()
                .requestMatchers("/api/signIn","/api/signUp").permitAll()
                .requestMatchers(HttpMethod.GET,"/api/member/store").permitAll()
                .anyRequest().authenticated();
        return httpSecurity.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws  Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
        @Override
        public void configure(HttpSecurity http) throws Exception {
            AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
            http
                    .addFilter(corsConfig.corsFilter())
                    .addFilter(new JwtAuthenticationFilter(authenticationManager,tokenRepository,tokenProvider))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager,memberRepository,tokenRepository,tokenProvider));
        }
    }
}
