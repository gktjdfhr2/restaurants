package com.worst.restmap.domain.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignInDTO {
    @NotNull
    private String userEmail;
    @NotNull
    private String userPasswd;
}
