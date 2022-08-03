package com.ssafy.aejimeongji.api.dto.petPlace;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PetPlaceResponse {

    private String name;
    private String description;
    private String address;
    private String tel;
    private String category;
    private String openingHours;

    public PetPlaceResponse(PetPlace petPlace) {

        name = petPlace.getName();
        description = petPlace.getDescription();
        address = petPlace.getAddress();
        tel = petPlace.getTel();
        category = petPlace.getCategory();
        openingHours = petPlace.getOpeningHours();

    }
}
