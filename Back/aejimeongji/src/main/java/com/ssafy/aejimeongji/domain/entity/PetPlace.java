package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "petplace")
public class PetPlace {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String address;

    private String tel;

    private String category;

    private Point point;

    private String openingHours;

    private Double distance;

    public PetPlace(Long id, String name, String description, String address, String tel, String category, Point point, String openingHours, Double distance) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.tel = tel;
        this.category = category;
        this.point = point;
        this.openingHours = openingHours;
        this.distance = distance;
    }
}
