package com.worst.restmap.service;

import com.worst.restmap.common.StatusCode;
import com.worst.restmap.domain.dto.business.MenuDto;
import com.worst.restmap.domain.entity.Business;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class BusinessServiceImpl implements BusinessService{
    @Override
    public ResponseEntity<StatusCode> saveBusiness(Business business) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> saveMenu(MenuDto menuDto) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> ReservationAll(Business business) {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> updateLine() {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> updateReservation() {
        return null;
    }

    @Override
    public ResponseEntity<StatusCode> callLineMember() {
        return null;
    }
}
