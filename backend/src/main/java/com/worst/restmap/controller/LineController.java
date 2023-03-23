package com.worst.restmap.controller;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.dto.reservation.LineDto;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.service.LineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class LineController {
    private final LineService lineService;

    @PostMapping("/line")
    public ResponseEntity<StatusCode> saveLine(@AuthenticationPrincipal CustomUserDetail customUserDetail, @RequestBody LineDto lineDto) {
        String memberEmail = customUserDetail.getUsername();

        return lineService.saveLine(memberEmail, lineDto);
    }


}
