package com.worst.restmap.domain.dto.sign;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignInDto {
    @NotNull
    private String userEmail;
    @NotNull
    private String userPasswd;
}
