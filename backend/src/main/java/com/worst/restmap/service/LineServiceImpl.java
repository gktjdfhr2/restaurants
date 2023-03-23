package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.reservation.LineDto;
import com.worst.restmap.domain.entity.Business;
import com.worst.restmap.domain.entity.Line;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class LineServiceImpl implements LineService{
    private final MemberRepository memberRepository;
    @Override
    public ResponseEntity<StatusCode> saveLine(String memberEmail, LineDto lineDto) {
        LocalDateTime localDateTime = LocalDateTime.now();
        Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);
//        Line.builder().lineDatetime(localDateTime).
        return null;
//        return new JsonResponse().send(StatusCode.builder().resCode("1").resMsg("줄서기 완료").data().build());
    }
}
