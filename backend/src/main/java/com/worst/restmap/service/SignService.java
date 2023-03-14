package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.sign.SignUpDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface SignService {

    ResponseEntity<StatusCode> signUp(SignUpDto signUpDto);
}
