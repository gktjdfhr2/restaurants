package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.entity.Member;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface MemberService {
    ResponseEntity<StatusCode> updateMember(Member member);
    ResponseEntity<StatusCode> findPassword();
    ResponseEntity<StatusCode> findSearchList(String memberEmail);

}
