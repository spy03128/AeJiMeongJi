package com.ssafy.aejimeongji.api.dto.calendar;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class CalendarTodosResponse {

    private String title;
    private String content;
    private LocalDate date;

}
