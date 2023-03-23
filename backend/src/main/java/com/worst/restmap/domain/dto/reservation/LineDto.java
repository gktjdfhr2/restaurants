package com.worst.restmap.domain.dto.reservation;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class LineDto {
    private long lineBusinessId;
    private long linePersonnelAdult;
    private long linePersonnelKid;

}
