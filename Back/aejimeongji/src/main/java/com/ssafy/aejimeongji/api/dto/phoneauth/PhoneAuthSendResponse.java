package com.ssafy.aejimeongji.api.dto.phoneauth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PhoneAuthSendResponse {
    private String message;
    private String phoneUUID;
}
