package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.business.MenuDto;
import com.worst.restmap.domain.entity.Business;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public interface BusinessService {

    ResponseEntity<StatusCode> saveBusiness(Business business);
    ResponseEntity<StatusCode> saveMenu(MenuDto menuDto);
    ResponseEntity<StatusCode> ReservationAll(Business business);
    ResponseEntity<StatusCode> updateLine();
    ResponseEntity<StatusCode> updateReservation();
    ResponseEntity<StatusCode> callLineMember();

}
