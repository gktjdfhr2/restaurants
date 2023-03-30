package com.worst.restmap.domain.entity;

import com.worst.restmap.domain.dto.reservation.LineDto;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "`line`")
@Getter
@Setter
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
    private LocalDateTime lineDatetime;
    @Column(name = "line_complete_time")
    private LocalDateTime lineCompleteTime;

    @Builder(builderMethodName = "lineBuilder")
    public Line(LineDto lineDto, LocalDateTime localDateTime, Member member) {
        this.lineMemberEmail = member.getMemberEmail();
        this.lineMemberName = member.getMemberName();
        this.linePhoneNumber = member.getMemberPhone();
        this.lineBusinessId = lineDto.getLineBusinessId();
        this.lineState = 1;
        this.linePersonnelAdult = lineDto.getLinePersonnelAdult();
        this.linePersonnelKid = lineDto.getLinePersonnelKid();
        this.lineDatetime = localDateTime;
    }
}
