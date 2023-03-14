package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.dto.reservation.LineDto;
import org.springframework.http.ResponseEntity;

public interface ReservationService {
    ResponseEntity<StatusCode> saveLine(LineDto lineDto, String memberEmail);
}
