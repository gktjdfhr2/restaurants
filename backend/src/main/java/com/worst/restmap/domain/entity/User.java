package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "`user`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "user")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column( name = "user_email")
    private String userEmail;

    @Column( name = "user_name")
    private String userName;

    @Column( name = "user_passwd")
    private String userPasswd;

    @Column( name = "user_type")
    private String userType;

    @Column( name = "user_phone")
    private String userPhone;

    @Column( name = "user_role")
    private String userRole;

    @Column( name = "user_withdrawal")
    private Long userWithdrawal;
}
