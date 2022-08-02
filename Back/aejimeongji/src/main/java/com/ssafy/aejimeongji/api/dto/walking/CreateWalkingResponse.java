package com.ssafy.aejimeongji.api.dto.walking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateWalkingResponse {
    private Long walkingId;
    private String message;
}
