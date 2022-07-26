package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "walking")
public class Walking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String distance;

    private String walkingTime;

    private String walkingDate;

    private String calories;

    public Walking(String distance, String walkingTime, String walkingDate, String calories) {
        this.distance = distance;
        this.walkingTime = walkingTime;
        this.walkingDate = walkingDate;
        this.calories = calories;
    }
}
