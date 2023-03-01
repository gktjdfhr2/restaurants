package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "`token`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Token {

    @Id
    @Column( name = "token_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long tokenId;
    @Column( name = "token_member_id")
    private long tokenMemberId;
    @Column( name = "token_access_token")
    private String tokenAccessToken;
    @Column( name = "token_refresh_token")
    private String tokenRefreshToken;
}
