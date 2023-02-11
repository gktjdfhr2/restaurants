package com.worst.restmap.service;

import com.worst.restmap.domain.entity.User;
import com.worst.restmap.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

//    @Transactional
//    public User signUp(UserDto userDto) {
//        if (userRepository.findOn)
//    }

}
