package com.worst.restmap.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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


    @JsonManagedReference("BusinessTagReference")
    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BusinessTag> businessTags = new ArrayList<>();

    @JsonManagedReference("BusinessReviewReference")
    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

    public double getAverageScore() {
        if (reviews.isEmpty()) {
            return 0;
        }
        BigDecimal sum = BigDecimal.ZERO;
        for (Review review: reviews) {
            BigDecimal b = review.getReviewScore();
            sum = sum.add(review.getReviewScore());
        }
        double result = sum.divide(BigDecimal.valueOf(reviews.size()),1, RoundingMode.DOWN).doubleValue();
        return result;
    }
}
