package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.SearchDto;
import com.worst.restmap.domain.dto.member.SearchStoreDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface SearchService {

    ResponseEntity<StatusCode> findStore(String memberEmail, SearchDto searchDto);

    ResponseEntity<StatusCode> findStoreDetail(long id);
    ResponseEntity<StatusCode> deleteFindStoreLog(String searchId);
}
