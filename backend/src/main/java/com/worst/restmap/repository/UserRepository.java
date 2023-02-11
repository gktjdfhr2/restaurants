package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    @EntityGraph(attributePaths = "authorities")
    Optional<User> findByUserEmail(String userEmail);

}
