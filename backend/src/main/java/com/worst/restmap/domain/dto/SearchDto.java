package com.worst.restmap.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
public class SearchDto {

    private String keyWord;
    private String condition;
    private List<Integer> tag;
    private List<Integer> amenities;
    private Integer openState;

}
