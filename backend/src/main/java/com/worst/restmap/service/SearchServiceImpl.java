package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.SearchDto;
import com.worst.restmap.domain.dto.member.SearchStoreDto;
import com.worst.restmap.domain.entity.Business;
import com.worst.restmap.domain.entity.Search;
import com.worst.restmap.repository.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
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

        List<Business> business = businessRepository.findByBusinessNameContaining(businessName);
        Search search = Search.builder().searchMemberEmail(memberEmail).searchKeyword(businessName).searchLogDatetime(localDateTime).build();
        searchRepository.save(search);
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
}
