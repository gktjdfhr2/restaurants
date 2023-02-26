package com.worst.restmap.domain.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table( name = "`review`")
public class Review {

    @Id
    @Column( name = "review_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long reviewId;

    @Column( name = "review_business_id")
    private long reivewBusinessId;

    @Column( name = "review_member_id")
    private long reviewMemberId;

    @Column( name = "review_score")
    private BigDecimal reviewScore;

    @Column( name = "review_detail")
    private String reviewDetail;

    @Column( name = "review_image_id")
    private long reviewImageId;
}
