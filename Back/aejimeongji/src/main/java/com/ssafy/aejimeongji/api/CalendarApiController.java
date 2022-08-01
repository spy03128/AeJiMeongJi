package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.calendar.CalendarTodosResponse;
import com.ssafy.aejimeongji.api.dto.calendar.CreateCalendarRequest;
import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.calendar.UpdateCalendarRequest;
import com.ssafy.aejimeongji.domain.entity.Calendar;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.service.CalendarService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CalendarApiController {

    private final CalendarService calendarService;

    @GetMapping("/dog/{dogId}/calendar")
    public ResponseEntity<?> getTodoList(@PathVariable Long dogId) {

        List<Calendar> list = calendarService.findCalendar(dogId);
        List<CalendarTodosResponse> calendarTodosResponse = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            CalendarTodosResponse temp = new CalendarTodosResponse(list.get(i).getTitle(), list.get(i).getContent(), list.get(i).getDate());
            calendarTodosResponse.add(temp);
        }

        return ResponseEntity.ok().body(calendarTodosResponse);
    }

    @GetMapping("/dog/{dogId}/calendar/{date}")
    public ResponseEntity<?> getTodo(@PathVariable("dogId") Long dogId,
                                     @PathVariable("date") @DateTimeFormat(pattern = "yyyyMMdd") LocalDate date) {

        List<Calendar> list = calendarService.findCalendar(dogId);
        List<CalendarTodosResponse> calendarTodosResponse = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getDate().isEqual(date)) {
                CalendarTodosResponse temp = new CalendarTodosResponse(list.get(i).getTitle(), list.get(i).getContent(), list.get(i).getDate());
                calendarTodosResponse.add(temp);
            }
        }

        return ResponseEntity.ok().body(calendarTodosResponse);
    }

    @PostMapping("/dog/{dogId}/calendar")
    public ResponseEntity<ResponseDTO> createTodo(@PathVariable Long dogId,
                                               CreateCalendarRequest request) {

        Dog dog = calendarService.findDog(dogId);
        calendarService.createCalendar(new Calendar(dog, request.getTitle(), request.getContent(), request.getDate()));

        return ResponseEntity.ok(new ResponseDTO("Todo가 생성되었습니다."));
    }

    @PutMapping("/calendar/{calendarId}")
    public ResponseEntity<ResponseDTO> updateTodo(@PathVariable Long calendarId,
                                                  UpdateCalendarRequest request) {

        calendarService.updateCalendar(calendarId, request.getTitle(), request.getContent(), request.getDate());

        return ResponseEntity.ok(new ResponseDTO("Todo를 수정하였습니다."));
    }

    @DeleteMapping("/calendar/{calendarId}")
    public ResponseEntity<ResponseDTO> deleteTodo(@PathVariable Long calendarId) {

        calendarService.deleteCalendar(calendarId);

        return ResponseEntity.ok(new ResponseDTO("Todo를 삭제하였습니다."));
    }
}
