package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.member.SearchStoreDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class SearchServiceImpl implements SearchService{
    @Override
    public ResponseEntity<StatusCode> findStore(SearchStoreDto searchStoreDto) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> deleteFindStoreLog(String searchId) {
        return null;
    }
}
