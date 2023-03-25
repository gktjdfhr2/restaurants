package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.Line;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LineRepository extends JpaRepository<Line, Long> {
}
