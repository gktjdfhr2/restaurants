package com.worst.restmap.controller;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.config.auth.CustomUserDetail;
import com.worst.restmap.domain.dto.SearchDto;
import com.worst.restmap.service.SearchService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.spel.support.StandardTypeComparator;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@Component
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class SearchController {

    private final SearchService searchService;

    @GetMapping("/store")
    @Transactional
    public ResponseEntity<StatusCode> store(@AuthenticationPrincipal CustomUserDetail customUserDetail,
                                            @RequestParam String keyword){
        SearchDto searchDto = SearchDto.builder().keyWord(keyword).build();
//        String memberEmail = customUserDetail.getUsername();
        return searchService.findStore(keyword, searchDto);
    }

    @GetMapping("/store/{id}")
    @Transactional
    public ResponseEntity<StatusCode> storeDetail(@AuthenticationPrincipal CustomUserDetail customUserDetail,
                                                  @PathVariable long id) {
        return searchService.findStoreDetail(id);
    }


}
