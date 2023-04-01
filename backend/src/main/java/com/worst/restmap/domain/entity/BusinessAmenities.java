package com.worst.restmap.domain.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "`business_amenities`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BusinessAmenities {

    @Id
    @Column(name = "business_amenities_id")
    private long id;

    @Column(name = "business_amenities_business_id")
    private long businessId;

    @Column(name = "business_amenities_amenities_id")
    private long amenitiesId;

    @JsonBackReference("BusinessAmenities")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_amenities_business_id", insertable = false, updatable = false)
    private Business business;

//    @JsonBackReference("Amenities")
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "business_amenities_amenities_id", insertable = false, updatable = false)
//    private Amenities amenities;



}
