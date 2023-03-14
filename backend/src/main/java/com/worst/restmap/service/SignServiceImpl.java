package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.sign.SignInDto;
import com.worst.restmap.domain.dto.sign.SignUpDto;
import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SignServiceImpl implements SignService{
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final MemberRepository memberRepository;
    @Transactional
    @Override
    public ResponseEntity<StatusCode> signUp(SignUpDto signUpDto) {
        /*TODO
        * 이메일 유효성 검증, 예외 처리 프로세스 정리
        * */
        Member member = memberRepository.findByMemberEmail(signUpDto.getMemberEmail()).orElseGet(Member::new);
        if(memberRepository.findByMemberEmail(signUpDto.getMemberEmail()).isPresent()) {
            return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("1").resMsg("이미 존재하는 계정입니다.").build());
        }

        Object obj = memberRepository.saveAndFlush(signUpDto.toEntity(bCryptPasswordEncoder));

        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("2").resMsg("계정 생성 완료").build());
    }

    @Transactional
    public ResponseEntity<StatusCode> signIn(SignInDto loginDTO) {

        return null;
    }
}
