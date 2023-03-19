package com.worst.restmap.service;

import com.worst.restmap.common.JsonResponse;
import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.SearchDto;
import com.worst.restmap.domain.dto.member.SearchStoreDto;
import com.worst.restmap.domain.entity.Business;
import com.worst.restmap.domain.entity.Search;
import com.worst.restmap.repository.BusinessRepository;
import com.worst.restmap.repository.BusinessTagRepository;
import com.worst.restmap.repository.MemberRepository;
import com.worst.restmap.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService{
    private final MemberRepository memberRepository;
    private final BusinessRepository businessRepository;
    private final BusinessTagRepository businessTagRepository;
    private final TagRepository tagRepository;
    @Override
    public ResponseEntity<StatusCode> findStore(String memberEmail, SearchDto searchDto) {
        LocalDateTime localDateTime = LocalDateTime.now();
        String businessName = searchDto.getKeyWord();
        List<Business> business = businessRepository.findByBusinessNameContaining(businessName);
        Search search = Search.builder().searchMemberEmail(memberEmail).searchKeyword(businessName).searchLogDatetime(localDateTime).build();
        return new JsonResponse().send(HttpStatus.OK, StatusCode.builder().resCode("").resMsg("정상조회").data(business).build());
    }

    @Override
    public ResponseEntity<StatusCode> deleteFindStoreLog(String searchId) {
        return null;
    }
}
