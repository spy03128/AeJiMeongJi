package com.ssafy.aejimeongji.api.dto.login;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class IssueResponse {
    private String message;
    private String accessToken;
}
