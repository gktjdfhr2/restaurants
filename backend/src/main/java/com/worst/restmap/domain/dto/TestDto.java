package com.worst.restmap.domain.dto;

import com.worst.restmap.domain.entity.Business;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class TestDto {
    private Business business;
    private Double average;

    public TestDto(Business business, Double average) {
        this.business = business;
        this.average = average;
    }
}
