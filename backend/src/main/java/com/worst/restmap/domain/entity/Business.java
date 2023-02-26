package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

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
    @Column(name = "memberId")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long businessId;
    @Column( name = "business_place")
    private String businessPlace;
    @Column( name = "business_address")
    private String businessAddress;
    @Column( name = "business_owner")
    private String businessOwner;
    @Column( name = "business_conditions")
    private long businessConditions;
    @Column( name = "business_tag")
    private String businessTag;
    @Column( name = "business_open_state")
    private long businessOpenState;
    @Column( name = "business_delete_state")
    private long businessDeleteState;
    @Column( name = "business_likes")
    private long businessLikes;
    @Column( name = "business_amenities")
    private String businessAmenities;
    @Column( name = "business_open_time")
    private Date businessOpenTime;
    @Column( name = "business_closed_time")
    private Date businessClosedTime;
    @Column( name = "business_break_time")
    private Date businessBreakTime;
    @Column(name = "business_close_day")
    private Date businessCloseDay;
}
