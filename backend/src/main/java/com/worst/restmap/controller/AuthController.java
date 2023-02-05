package com.worst.restmap.controller;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.LoginDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/signUp")
    public String signUp2(@RequestParam String id, @RequestParam String passwd) {
        return "id : " + id + "\npasswd : " + passwd;
    }

    @PostMapping("/signUp")
    public String signUp(@RequestBody Map<String, String> map) {

        return "";
    }

    @PostMapping("/signIn")
    public ResponseEntity<StatusCode> signIn(@RequestBody LoginDTO loginDTO){

        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode(0).resMsg("로그인 메세지").build());
    }

}
