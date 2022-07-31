package com.ssafy.aejimeongji.api.dto.Calendar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCalendarRequest {

    private Long dogId;
    private String title;
    private String content;
    @DateTimeFormat(pattern = "yyyyMMdd")
    private LocalDate date;

}
