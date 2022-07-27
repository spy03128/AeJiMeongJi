package com.ssafy.aejimeongji.api.advice;

import com.ssafy.aejimeongji.api.dto.ErrorDTO;
import com.ssafy.aejimeongji.domain.exception.ExpireAuthNumberException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(ExpireAuthNumberException.class)
    public ResponseEntity<ErrorDTO> expireAuthNumberExHandler(Exception ex) {
        return ResponseEntity.badRequest().body(new ErrorDTO(400, ex.getMessage()));
    }
}
