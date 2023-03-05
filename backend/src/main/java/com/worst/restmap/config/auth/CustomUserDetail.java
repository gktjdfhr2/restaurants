package com.worst.restmap.config.auth;

import com.worst.restmap.domain.entity.Member;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class CustomUserDetail implements UserDetails {
    private final Member member;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        if(member.getMemberRole().equals("0")){
            authorities.add(()-> "ROLE_MEMBE.R");
        } else if((member.getMemberRole().equals("1"))){
            authorities.add(()-> "ROLE_BUSINESS");
        }
        else {
            authorities.add(()-> "ROLE_ADMIN");
        }
        return authorities;
    }

    @Override
    public String getPassword() {
        return member.getMemberPassword();
    }

    @Override
    public String getUsername() {
        return member.getMemberEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
