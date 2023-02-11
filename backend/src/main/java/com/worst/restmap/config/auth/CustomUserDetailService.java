package com.worst.restmap.config.auth;

import com.worst.restmap.domain.entity.User;
import com.worst.restmap.repository.UserRepository;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
        User userEntity = userRepository.findByUserEmail(userEmail).orElseGet(User::new);
        return new CustomUserDetail(userEntity);

    }

//    private org.springframework.security.core.userdetails.User createUser(String userEmail, User user) {
//        if (user.getUserWithdrawal() == 1) {
//            throw new RuntimeException(userEmail + " -> 활성화 되어 있지 않습니다.");
//        }
//
//        List<GrantedAuthority> grantAuthorities = ;
//
//        return new org.springframework.security.core.userdetails.User(user.getUserName(), grantAuthorities);
//    }
}
