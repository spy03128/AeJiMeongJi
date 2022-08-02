package com.ssafy.aejimeongji.api.dto.calendar;

import com.ssafy.aejimeongji.domain.entity.Calendar;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class CalendarTodosResponse {

    private String content;
    private LocalDate date;
    private Boolean isActive;
    private Boolean isAlert;

    public CalendarTodosResponse(Calendar calendar) {
        content = calendar.getContent();
        date = calendar.getDate();
        isActive = calendar.getIsActive();
        isAlert = calendar.getIsAlert();
    }
}
