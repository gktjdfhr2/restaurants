package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.reservation.LineDto;
import com.worst.restmap.domain.entity.Business;
import org.springframework.http.ResponseEntity;

public interface LineService {
    ResponseEntity<StatusCode> saveLine(String memberEmail, LineDto lineDto);
}
