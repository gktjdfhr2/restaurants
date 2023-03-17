package com.worst.restmap.controller;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@Component
@RequestMapping("/api/member")
public class SearchController {


    @PostMapping("/store")
    public ResponseEntity<StatusCode> store(@AuthenticationPrincipal CustomUserDetail customUserDetail, @RequestParam String keyword){

    }

}
