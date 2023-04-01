package com.worst.restmap.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;

@Entity
@Getter
@Table( name = "`review`")
public class Review {

    @Id
    @Column( name = "review_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long reviewId;

    @Column( name = "review_business_id")
    private long reivewBusinessId;

    @Column( name = "review_member_email")
    private String reviewMemberEmail;

    @Column( name = "review_score")
    private BigDecimal reviewScore;

    @Column( name = "review_detail")
    private String reviewDetail;

    //TODO 이미지 조인 컬럼 추가
    /*@Column( name = "review_image_id")
    private long reviewImageId;*/

    @JsonBackReference("BusinessReviewReference")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_business_id", insertable = false, updatable = false)
    private Business business;

    @JsonBackReference("MemberReviewReference")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_member_email", insertable = false, updatable = false)
    private Member member;
}
