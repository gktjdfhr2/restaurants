package com.worst.restmap.domain.dto;

import com.worst.restmap.domain.entity.Member;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Getter
@Setter
public class SignUpDto {

    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberPhone;
    private String memberAddress;
    private String memberRole;

    public Member toEntity(BCryptPasswordEncoder bCryptPasswordEncoder) {
        return Member.builder()
                .memberRole(memberRole)
                .memberEmail(memberEmail)
                .memberName(memberName)
                .memberPassword(bCryptPasswordEncoder.encode(memberPassword))
                .memberPhone(memberPhone)
                .memberAddress(memberAddress).build();
    }

}
