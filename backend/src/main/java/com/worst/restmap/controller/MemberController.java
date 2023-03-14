package com.worst.restmap.controller;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.entity.Line;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Component
@RequestMapping("/api/member")
public class MemberController {

    @PostMapping("/line")
    public ResponseEntity<StatusCode> saveLine(@RequestBody Line line, CustomUserDetail customUserDetail){
        String memberEmail = customUserDetail.getMember().getMemberEmail();
        return null;
    }


}
