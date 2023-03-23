package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
