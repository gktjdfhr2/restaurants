//package com.worst.restmap.config.jwt;
//
//import com.worst.restmap.config.auth.CustomUserDetailService;
//import com.worst.restmap.domain.entity.Member;
//import com.worst.restmap.repository.MemberRepository;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//
//@Component
//public class ManagerProvider implements AuthenticationManager {
//
//    private final CustomUserDetailService customUserDetailService;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;
//    private final MemberRepository memberRepository;
//
//    public ManagerProvider(CustomUserDetailService customUserDetailService, BCryptPasswordEncoder bCryptPasswordEncoder, MemberRepository memberRepository) {
//        this.customUserDetailService = customUserDetailService;
//        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
//        this.memberRepository = memberRepository;
//    }
//
//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        String memberEmail = authentication.getName();
//        String memberPassword = (String) authentication.getCredentials();
//
//        Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);
//
//
//        if(!member.getMemberEmail().equals(memberEmail)){
//            System.out.println("존재하지 않는 아이디입니다.");
//        } else if(!member.getMemberPassword().equals(memberPassword)) {
//            System.out.println("비밀번호가 틀립니다.");
//        } else {
//
//        }
//
//
//
//
//        return ;
//    }
//}
