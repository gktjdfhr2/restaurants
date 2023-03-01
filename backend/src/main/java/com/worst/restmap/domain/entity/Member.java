package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "member")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @Column(name = "member_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column( name = "member_role")
    private String memberRole;

    @Column( name = "member_email")
    private String memberEmail;

    @Column( name = "member_name")
    private String memberName;

    @Column( name = "member_password")
    private String memberPassword;

    @Column( name = "member_phone")
    private String memberPhone;

    @Column( name = "member_address")
    private String memberAddress;

    @Column( name = "member_is_withdrawal")
    private boolean memberIsWithdrawal;


}
