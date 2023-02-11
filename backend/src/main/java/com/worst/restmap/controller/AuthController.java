package com.worst.restmap.controller;


import com.worst.restmap.config.jwt.JwtFilter;
import com.worst.restmap.config.jwt.TokenProvider;
import com.worst.restmap.domain.dto.LoginDTO;
import com.worst.restmap.domain.dto.TokenDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public AuthController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }


    @GetMapping("/signUp")
    public String signUp2(@RequestParam String id, @RequestParam String passwd) {
        return "id : " + id + "\npasswd : " + passwd;
    }

    @PostMapping("/signUp")
    public String signUp(@RequestBody Map<String, String> map) {

        return "";
    }

//    @PostMapping("/signIn")
//    public ResponseEntity<StatusCode> signIn(@RequestBody LoginDTO loginDTO){
//
//        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode(0).resMsg("로그인 메세지").build());
//    }

    @PostMapping("/signIn")
    public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDTO loginDTO) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDTO.getUserEmail(), loginDTO.getUserPasswd());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    }

}
