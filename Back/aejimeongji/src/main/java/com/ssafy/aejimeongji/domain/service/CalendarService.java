package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Calendar;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.repository.CalendarRepository;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
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
    public Long updateCalendar(Long id, String title, String content, LocalDate date) {
        Calendar findCalendar = findTodo(id);
        findCalendar.updateCalendar(title, content, date);
        return findCalendar.getId();
    }

    @Transactional
    public void deleteCalendar(Long id) {
        Calendar findCalendar = findTodo(id);
        calendarRepository.delete(findCalendar);
    }
}
