package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.reservation.LineDto;
import com.worst.restmap.domain.entity.Business;
import com.worst.restmap.domain.entity.Line;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.LineRepository;
import com.worst.restmap.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class LineServiceImpl implements LineService{
    private final MemberRepository memberRepository;
    private final LineRepository lineRepository;
    @Override
    public ResponseEntity<StatusCode> saveLine(String memberEmail, LineDto lineDto) {
        LocalDateTime localDateTime = LocalDateTime.now();
        Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);
        Line line = Line.lineBuilder().lineDto(lineDto).localDateTime(localDateTime).member(member).build();
        lineRepository.save(line);
        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("1").resMsg("줄서기 등록").data(line).build());
    }
}
