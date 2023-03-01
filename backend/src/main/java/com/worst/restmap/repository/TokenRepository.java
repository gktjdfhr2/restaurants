package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Token findByTokenMemberId(Long memberId);
    long deleteByTokenMemberId(Long memberId);
}
