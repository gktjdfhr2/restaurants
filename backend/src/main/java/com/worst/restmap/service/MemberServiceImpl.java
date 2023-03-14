package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.entity.Line;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.domain.entity.Reservation;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class MemberServiceImpl implements MemberService{
    @Override
    public ResponseEntity<StatusCode> updateMember(Member member) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> findSearchList(String memberEmail) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> saveLine(Line line) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> saveReservation(Reservation reservation) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> updateReservation() {
        return null;
    }
}
