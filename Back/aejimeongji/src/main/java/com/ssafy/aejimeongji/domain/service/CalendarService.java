package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Calendar;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.entity.Todos;
import com.ssafy.aejimeongji.domain.repository.CalendarRepository;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import com.ssafy.aejimeongji.domain.repository.TodosRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CalendarService {

    private final CalendarRepository calendarRepository;
    private final TodosRepository todosRepository;
    private final DogRepository dogRepository;

    public Dog findDog(Long dogId) {
        return dogRepository.findById(dogId)
                .orElseThrow(() -> new IllegalArgumentException("조회한 강아지가 존재하지 않습니다."));
    }

    public Calendar findTodo(Long id) {
        return calendarRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("요청한 캘린더가 존재하지 않습니다."));
    }

    public List<Calendar> findCalendar(Long dogId) {
        return calendarRepository.findByDogId(dogId);
    }

    @Transactional
    public Long createCalendar(Calendar calendar) {
        return calendarRepository.save(calendar).getId();
    }

    @Transactional
    public Long updateCalendar(Long id, String content, LocalDate date, Boolean isActive, Boolean isAlert) {
        Calendar findCalendar = findTodo(id);
        findCalendar.updateCalendar(content, date, isActive, isAlert);
        return findCalendar.getId();
    }

    @Transactional
    public void deleteCalendar(Long id) {
        Calendar findCalendar = findTodo(id);
        calendarRepository.delete(findCalendar);
    }

    // 메인 todo 노출

    public Todos findTodos(Long calendarId) {
        return todosRepository.findByCalendarId(calendarId);
    }

    @Transactional
    public Long addTodos(Dog dog, Calendar calendar) {
        Todos todos = new Todos(dog, calendar);
        return todosRepository.save(todos).getId();
    }

    @Transactional
    public void deleteTodos(Long calendarId) {
        Todos todos = findTodos(calendarId);
        todosRepository.delete(todos);
    }

    public List<Todos> findDogTodos(Long dogId) {
        return todosRepository.findByDogId(dogId);
    }

}
