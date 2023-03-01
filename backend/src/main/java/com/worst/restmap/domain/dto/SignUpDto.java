package com.worst.restmap.domain.dto;

import com.worst.restmap.domain.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDto {

    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberPhone;
    private String memberAddress;
    private String memberRole;

    public Member toEntity() {
        return Member.builder()
                .memberEmail(memberEmail)
                .memberPassword(memberPassword)
                .memberName(memberName)
                .memberPhone(memberPhone)
                .memberAddress(memberAddress)
                .memberRole(memberRole)
                .build();
    }
}
