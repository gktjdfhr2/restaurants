package com.worst.restmap.controller;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.sign.SignInDto;
import com.worst.restmap.domain.dto.sign.SignUpDto;
import com.worst.restmap.service.SignServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SignController {

    private final SignServiceImpl signService;
    @PostMapping("/signUp")
    public ResponseEntity<StatusCode> signUp(@RequestBody SignUpDto signUpDto) {
        return signService.signUp(signUpDto);
    }

    @PostMapping("/signIn")
    public ResponseEntity<StatusCode> signIn(@RequestBody SignInDto loginDTO) {
        return signService.signIn(loginDTO);
    }
}
