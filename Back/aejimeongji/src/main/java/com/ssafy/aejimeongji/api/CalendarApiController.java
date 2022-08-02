package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.calendar.CalendarTodosResponse;
import com.ssafy.aejimeongji.api.dto.calendar.CalendarRequest;
import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.domain.entity.Calendar;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.entity.Todos;
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

    @GetMapping("/dog/{dogId}/calendar/main")
    public ResponseEntity<?> getMainTodo(@PathVariable Long dogId) {

        log.info("{}번 강아지 메인 Todos 노출", dogId);

        List<Todos> list = calendarService.findDogTodos(dogId);
        List<CalendarTodosResponse> response = list.stream()
                .filter(o -> o.getCalendar().getIsActive())
                .map(o -> new CalendarTodosResponse(o.getCalendar()))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(response);

    }

    @PostMapping("/dog/{dogId}/calendar")
    public ResponseEntity<ResponseDTO> createTodo(@PathVariable Long dogId,
                                               @RequestBody CalendarRequest request) {

        log.info("{}번 강아지 Todo 생성", dogId);

        Dog dog = calendarService.findDog(dogId);
        Calendar calendar = new Calendar(dog, request.getContent(), request.getDate(), request.getIsActive(), request.getIsAlert());
        calendarService.createCalendar(calendar);

        if (request.getIsActive()) {
            calendarService.addTodos(dog, calendar);
        }

        return ResponseEntity.ok(new ResponseDTO("Todo가 생성되었습니다."));
    }

    @PutMapping("/calendar/{calendarId}")
    public ResponseEntity<ResponseDTO> updateTodo(@PathVariable Long calendarId,
                                                  @RequestBody CalendarRequest request) {

        log.info("{}번 Todo 수정", calendarId);

        Boolean todos = calendarService.findTodos(calendarId).getCalendar().getIsActive();

        if (todos && !request.getIsActive()) {
            calendarService.deleteTodos(calendarId);
        } else if (!todos && request.getIsActive()) {
            calendarService.addTodos(calendarService.findTodo(calendarId).getDog(), calendarService.findTodo(calendarId));
        }

        calendarService.updateCalendar(calendarId, request.getContent(), request.getDate(), request.getIsActive(), request.getIsAlert());


        return ResponseEntity.ok(new ResponseDTO("Todo를 수정하였습니다."));
    }

    @DeleteMapping("/calendar/{calendarId}")
    public ResponseEntity<ResponseDTO> deleteTodo(@PathVariable Long calendarId) {

        log.info("{}번 Todo 삭제", calendarId);

        if (calendarService.findTodo(calendarId).getIsActive()) {
            calendarService.deleteTodos(calendarId);
        }

        calendarService.deleteCalendar(calendarId);

        return ResponseEntity.ok(new ResponseDTO("Todo를 삭제하였습니다."));
    }
}
