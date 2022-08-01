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
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CalendarApiController {

    private final CalendarService calendarService;

    @GetMapping("/dog/{dogId}/calendar")
    public ResponseEntity<?> getTodoList(@PathVariable Long dogId) {

        log.info("{}번 강아지 Todos", dogId);

        List<Calendar> list = calendarService.findCalendar(dogId);
        List<CalendarTodosResponse> response = list.stream()
                .map(o -> new CalendarTodosResponse(o))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/dog/{dogId}/calendar/{date}")
    public ResponseEntity<?> getTodo(@PathVariable("dogId") Long dogId,
                                     @PathVariable("date") @DateTimeFormat(pattern = "yyyyMMdd") LocalDate date) {

        log.info("{}번 강아지 {}일의 Todos", dogId, date);

        List<Calendar> list = calendarService.findCalendar(dogId);
        List<CalendarTodosResponse> response = list.stream()
                .filter(o -> o.getDate().isEqual(date))
                .map(o -> new CalendarTodosResponse(o))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/dog/{dogId}/calendar")
    public ResponseEntity<ResponseDTO> createTodo(@PathVariable Long dogId,
                                               @RequestBody CreateCalendarRequest request) {

        log.info("{}번 강아지 Todo 생성", dogId);

        Dog dog = calendarService.findDog(dogId);
        calendarService.createCalendar(new Calendar(dog, request.getTitle(), request.getContent(), request.getDate()));

        return ResponseEntity.ok(new ResponseDTO("Todo가 생성되었습니다."));
    }

    @PutMapping("/calendar/{calendarId}")
    public ResponseEntity<ResponseDTO> updateTodo(@PathVariable Long calendarId,
                                                  @RequestBody UpdateCalendarRequest request) {

        log.info("{}번 Todo 수정", calendarId);

        calendarService.updateCalendar(calendarId, request.getTitle(), request.getContent(), request.getDate());

        return ResponseEntity.ok(new ResponseDTO("Todo를 수정하였습니다."));
    }

    @DeleteMapping("/calendar/{calendarId}")
    public ResponseEntity<ResponseDTO> deleteTodo(@PathVariable Long calendarId) {

        log.info("{}번 Todo 삭제", calendarId);

        calendarService.deleteCalendar(calendarId);

        return ResponseEntity.ok(new ResponseDTO("Todo를 삭제하였습니다."));
    }
}
