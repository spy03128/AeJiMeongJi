package com.ssafy.aejimeongji.api.dto.member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DuplicationCheckResponse {
    private String resultStatus;
    private String message;
}
