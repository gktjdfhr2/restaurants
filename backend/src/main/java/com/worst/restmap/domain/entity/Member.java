package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "member")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Member {

    @Id
    @Column( name = "member_email")
    private String memberEmail;

    @Column( name = "member_role")
    private String memberRole;

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

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();
}
