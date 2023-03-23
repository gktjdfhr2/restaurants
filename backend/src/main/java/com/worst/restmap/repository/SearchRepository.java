package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.Search;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SearchRepository extends JpaRepository<Search, Long> {
}
