package com.worst.restmap.config.auth;

import com.worst.restmap.domain.entity.Member;
import com.worst.restmap.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;
    @Override
    public UserDetails loadUserByUsername(String memberEmail) throws UsernameNotFoundException {
        Member member = memberRepository.findByMemberEmail(memberEmail).orElseGet(Member::new);
        System.out.println(member.getMemberName());
        return new CustomUserDetail(member);

    }
}
