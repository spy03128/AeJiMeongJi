package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class petplace {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String address;

    private String tel;

    private String category;

    private double lat;

    private double lng;

    private String openingHours;

    public petplace(Long id, String name, String description, String address, String tel, String category, double lat, double lng, String openingHours) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.tel = tel;
        this.category = category;
        this.lat = lat;
        this.lng = lng;
        this.openingHours = openingHours;
    }
}
