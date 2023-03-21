package com.worst.restmap.repository;

import com.worst.restmap.domain.entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BusinessRepository extends JpaRepository<Business, Long> {

    List<Business> findByBusinessNameContaining(String businessName);

    Optional<Business> findBusinessByBusinessId(long id);
}
