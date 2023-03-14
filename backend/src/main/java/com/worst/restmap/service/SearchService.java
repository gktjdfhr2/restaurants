package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.member.SearchStoreDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface SearchService {

    ResponseEntity<StatusCode> findStore(SearchStoreDto searchStoreDto);

    ResponseEntity<StatusCode> deleteFindStoreLog(String searchId);
}
