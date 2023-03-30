package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.reservation.LineDto;
import com.worst.restmap.domain.entity.Business;
import com.worst.restmap.domain.entity.Line;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.BusinessRepository;
import com.worst.restmap.repository.LineRepository;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.util.Util;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Component
@RequiredArgsConstructor
public class LineServiceImpl implements LineService{
    private final MemberRepository memberRepository;
    private final BusinessRepository businessRepository;
    private final LineRepository lineRepository;
    @Override
    public ResponseEntity<StatusCode> saveLine(String memberEmail, LineDto lineDto) {
        StatusCode statusCode = new StatusCode();
        LocalDateTime localDateTime = LocalDateTime.now();
        LocalTime localTime = localDateTime.toLocalTime();
        Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);
        Business business = businessRepository.findBusinessByBusinessId(lineDto.getLineBusinessId()).orElseGet(Business::new);

        if(localTime.compareTo(business.getBusinessOpenTime()) < 0 ||
                localTime.compareTo(business.getBusinessClosedTime()) > 0)
        {
            return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("2").resMsg("영업시간이 아닙니다.").build());
        }

        if( business.getBusinessBreakTime() !=null & business.getBusinessBreakEnd() !=null) {
            if(localTime.compareTo(business.getBusinessBreakTime()) > 0 ||
                    localTime.compareTo(business.getBusinessBreakEnd()) < 0){
                return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("3").resMsg("브레이크 타임입니다.").build());
            }
        }

        Line line = Line.lineBuilder().lineDto(lineDto).localDateTime(localDateTime).member(member).build();
        lineRepository.save(line);
        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("1").resMsg("줄서기 등록").data(line).build());
    }
}
