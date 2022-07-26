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
public class Breed {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String breedName;

    public Breed(String breedName) {
        this.breedName = breedName;
    }
}
