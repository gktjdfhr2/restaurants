package com.worst.restmap.controller;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.dto.reservation.LineDto;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Component
@RequestMapping("/api/reservation")
public class ReservationController {

    @PostMapping("/line")
    @Transactional
    public ResponseEntity<StatusCode> saveLine(@RequestBody LineDto lineDto, @AuthenticationPrincipal CustomUserDetail customUserDetail) {
        String memberEmail = customUserDetail.getUsername();
        return
    }
}
