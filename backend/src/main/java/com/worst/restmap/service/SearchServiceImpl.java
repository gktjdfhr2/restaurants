package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.SearchDto;
import com.worst.restmap.domain.dto.TestDto;
import com.worst.restmap.domain.dto.member.SearchStoreDto;
import com.worst.restmap.domain.entity.Business;
import com.worst.restmap.domain.entity.Review;
import com.worst.restmap.domain.entity.Search;
import com.worst.restmap.repository.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService{
    private final MemberRepository memberRepository;
    private final BusinessRepository businessRepository;
    private final BusinessTagRepository businessTagRepository;
    private final SearchRepository searchRepository;
    private final TagRepository tagRepository;
    @Override
    @Transactional
    public ResponseEntity<StatusCode> findStore(String memberEmail, SearchDto searchDto) {
        LocalDateTime localDateTime = LocalDateTime.now();
        String businessName = searchDto.getKeyWord();
        List<Business> business;
        if(searchDto.getKeyWord() == null) {
            business = businessRepository.findAll();
        } else {
            business = businessRepository.findByBusinessNameContaining(businessName);
        }
        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("").resMsg("정상조회").data(business).build());
    }

    @Override
    @Transactional
    public ResponseEntity<StatusCode> findStoreDetail(long id) {
        Business business = businessRepository.findBusinessByBusinessId(id).orElseGet(Business::new);
        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("").resMsg("조회완료").data(business).build());
    }

    @Override
    public ResponseEntity<StatusCode> deleteFindStoreLog(String searchId) {
        return null;
    }

    private Double calculateRating(List<Review> reviews) {
        if (reviews == null || reviews.isEmpty()) {
            return 0.0;
        }
        BigDecimal sum = new BigDecimal(0.0);
        for (Review review : reviews) {
            sum.add(review.getReviewScore());
        }
        Double result = sum.divide(BigDecimal.valueOf(reviews.size()),2, RoundingMode.DOWN).doubleValue();
        return result;
    }
}
