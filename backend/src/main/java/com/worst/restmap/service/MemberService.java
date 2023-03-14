package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.entity.Line;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.domain.entity.Reservation;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface MemberService {
    ResponseEntity<StatusCode> updateMember(Member member);
    ResponseEntity<StatusCode> findSearchList(String memberEmail);
    ResponseEntity<StatusCode> saveLine(Line line);
    ResponseEntity<StatusCode> saveReservation(Reservation reservation);
    ResponseEntity<StatusCode> updateReservation();

}
