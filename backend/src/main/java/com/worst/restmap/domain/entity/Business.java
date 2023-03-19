package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Table(name = "`business`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Business {
    @Id
    @Column(name = "business_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long businessId;
    @Column (name = "business_name")
    private String businessName;
    @Column( name = "business_place_x")
    private double businessPlaceX;
    @Column( name = "business_place_y")
    private double businessPlaceY;
    @Column( name = "business_address")
    private String businessAddress;
    @Column( name = "business_owner")
    private String businessOwner;
    @Column( name = "business_conditions")
    private String businessConditions;
    @Column( name = "business_open_state")
    private long businessOpenState;
    @Column( name = "business_delete_state")
    private long businessDeleteState;
    @Column( name = "business_likes")
    private long businessLikes;
    @Column( name = "business_open_time")
    private LocalTime businessOpenTime;
    @Column( name = "business_closed_time")
    private LocalTime businessClosedTime;
    @Column( name = "business_break_start")
    private LocalTime businessBreakTime;
    @Column(name = "business_break_end")
    private LocalTime businessBreakEnd;
//    @Column(name = "business_close_day")
//    private LocalDate businessCloseDay;
}
