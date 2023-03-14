package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "`reservation`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @Column( name = "reservation_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long reservationId;

    @Column( name = "reservation_member_role")
    private long reservationMemberRole;

    @Column( name = "reservation_member_email")
    private long reservationMemberEmail;

    @Column( name = "reservation_phone")
    private String reservationPhone;
    @Column( name = "reservation_business_id")
    private long reservationBusinessId;
    @Column( name = "reservation_state")
    private long reservationState;
    @Column( name = "reservation_personnel_adult")
    private long reservationPersonnelAdult;
    @Column( name = "reservation_personnel_kid")
    private long reservationPersonnelKid;
    @Column( name = "reservation_date")
    private Date reservationDate;
    @Column( name = "reservation_enter")
    private Date reservationEnter;

}
