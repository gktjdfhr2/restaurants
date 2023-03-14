package com.worst.restmap.domain.dto.reservation;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class LineDto {
    private String lineMemberEmail;
    private String lineMemberName;
    private String linePhoneNumber;
    private long lineBusinessId;
    private long lineState;
    private long linePersonnelAdult;
    private long linePersonnelKid;

}
