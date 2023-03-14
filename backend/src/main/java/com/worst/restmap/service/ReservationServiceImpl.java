package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.reservation.LineDto;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    private final MemberRepository memberRepository;
    @Override
    @Transactional
    public ResponseEntity<StatusCode> saveLine(LineDto lineDto, String memberEmail) {
        Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);

        return null;
    }
}
