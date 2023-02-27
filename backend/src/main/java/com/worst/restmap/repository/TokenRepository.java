package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Token findByMemberEmail(String MemberEmail);
    long deleteByTokenId(Long memberEmail);
}
