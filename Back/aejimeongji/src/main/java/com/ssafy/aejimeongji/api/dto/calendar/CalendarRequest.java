package com.ssafy.aejimeongji.api.dto.calendar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CalendarRequest {

    private String content;
    private LocalDate date;
    private Boolean isActive;
    private Boolean isAlert;

}
