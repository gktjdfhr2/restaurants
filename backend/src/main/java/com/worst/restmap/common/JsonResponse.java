package com.worst.restmap.common;


import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.nio.charset.Charset;

public class JsonResponse {
    private HttpHeaders headers = new HttpHeaders();

    public ResponseEntity<StatusCode> send(HttpStatus status, StatusCode statusCode) {
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        return new ResponseEntity<>(statusCode, headers, status);
    }
}
