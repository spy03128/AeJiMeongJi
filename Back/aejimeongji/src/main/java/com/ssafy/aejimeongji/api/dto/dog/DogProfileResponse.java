package com.ssafy.aejimeongji.api.dto.dog;

import com.ssafy.aejimeongji.domain.entity.Dog;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class DogProfileResponse {
    private Long dogId;
    private String name;
    private double weight;
    private LocalDate birthdate;
    private LocalDate adoptedDay;
    private String breedName;

    public DogProfileResponse(Dog dog) {
        dogId = dog.getId();
        name = dog.getName();
        weight = dog.getWeight();
        birthdate = dog.getBirthdate();
        adoptedDay = dog.getAdoptedDay();
        breedName = dog.getBreed().getBreedName();
    }

    public static DogProfileResponse toDTO(Dog dog) {
        return new DogProfileResponse(dog);
    }

}