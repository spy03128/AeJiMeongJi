package com.ssafy.aejimeongji.api.dto.calendar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCalendarRequest {

    private String title;
    private String content;
    private LocalDate date;

}
