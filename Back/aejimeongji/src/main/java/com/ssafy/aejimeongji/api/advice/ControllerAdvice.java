package com.ssafy.aejimeongji.api.advice;

import com.ssafy.aejimeongji.api.dto.ErrorDTO;
import com.ssafy.aejimeongji.domain.exception.ExpireAuthNumberException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(ExpireAuthNumberException.class)
    public ResponseEntity<ErrorDTO> expireAuthNumberExHandler(Exception ex) {
        log.error("exception 발생 = {}", ex.getMessage());
        return ResponseEntity.badRequest().body(new ErrorDTO(400, ex.getMessage()));
    }
}
