package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "`line`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Line {

    @Id
    @Column( name = "line_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long lineId;
    @Column( name = "line_member_email")
    private String lineMemberEmail;
    @Column(name = "line_member_name")
    private String lineMemberName;
    @Column(name = "line_phone_number")
    private String linePhoneNumber;
    @Column(name = "line_business_id")
    private long lineBusinessId;
    @Column(name = "line_state")
    private long lineState;
    @Column(name = "line_personnel_adult")
    private long linePersonnelAdult;
    @Column(name = "line_personnel_kid")
    private long linePersonnelKid;
    @Column(name = "line_datetime")
    private Date lineDatetime;
    @Column(name = "line_complete_time")
    private Date lineCompleteTime;
}
