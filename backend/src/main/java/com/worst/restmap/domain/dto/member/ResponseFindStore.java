package com.worst.restmap.domain.dto.member;

import lombok.Getter;

@Getter
public class ResponseFindStore {
    private String businessName;
    private double businessAverage;
    private int businessReviewSum;
    private String businessCondition;
    private String businessAddress;

}
