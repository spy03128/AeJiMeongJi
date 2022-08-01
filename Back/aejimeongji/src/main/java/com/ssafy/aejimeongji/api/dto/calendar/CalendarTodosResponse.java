package com.ssafy.aejimeongji.api.dto.calendar;

import com.ssafy.aejimeongji.domain.entity.Calendar;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class CalendarTodosResponse {

    private String title;
    private String content;
    private LocalDate date;

    public CalendarTodosResponse(Calendar calendar) {
        title = calendar.getTitle();
        content = calendar.getContent();
        date = calendar.getDate();
    }
}
