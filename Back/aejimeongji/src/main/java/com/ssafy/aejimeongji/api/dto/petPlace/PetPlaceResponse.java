package com.ssafy.aejimeongji.api.dto.petPlace;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.locationtech.jts.geom.Point;

import static java.lang.Math.*;

@Data
@AllArgsConstructor
public class PetPlaceResponse {

    private String name;
    private String description;
    private String address;
    private String tel;
    private String category;
    private String openingHours;
    private Point point;
    private Double distance;

    public PetPlaceResponse(PetPlace petPlace, Double lat, Double lng) {

        name = petPlace.getName();
        description = petPlace.getDescription();
        address = petPlace.getAddress();
        tel = petPlace.getTel();
        category = petPlace.getCategory();
        openingHours = petPlace.getOpeningHours();
        point = petPlace.getPoint();
        distance = (6371 * acos(cos(toRadians(lat)) * cos(toRadians(point.getCoordinate().getX())) * cos(toRadians(point.getCoordinate().getY()) - toRadians(lng)) + sin(toRadians(lat)) * sin(toRadians(point.getCoordinate().getX()))));

    }
}
