package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "`calls`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Calls {

    @Id
    @Column( name = "calls_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long callsId;

    @Column( name = "calls_business_id")
    private long callsBusinessId;

    @Column( name = "calls_member_email")
    private String callsMemberEmail;

    @Column( name = "calls_time")
    private Date callsTime;

}
