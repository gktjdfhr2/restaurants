package com.worst.restmap.domain.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {
    private String userEmail;
    private String userPasswd;
}
