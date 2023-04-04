package com.worst.restmap.domain.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "`amenities`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Amenities {

    @Id
    @Column(name = "amenities_id")
    private long amenitiesId;

    @Column(name = "amenities_name")
    private String amenitiesName;

//    @JsonManagedReference("Amenities")
//    @OneToMany(mappedBy = "amenities", cascade = CascadeType.ALL, orphanRemoval = true)
//    List<BusinessAmenities> businessAmenitiesList = new ArrayList<>();
}
