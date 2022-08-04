package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.petPlace.PetPlaceResponse;
import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.service.PetPlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.locationtech.jts.geom.Point;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/petplace")
@RequiredArgsConstructor
public class PetPlaceApiController {

    private final PetPlaceService petPlaceService;

    @GetMapping
    public ResponseEntity<List<PetPlaceResponse>> getNearPetPlaceList(@RequestParam(value = "lat") String lat,
                                                              @RequestParam(value = "lng") String lng,
                                                              @RequestParam(value = "dist") String dist) {

        List<PetPlace> list = petPlaceService.getNearPetPlaceList(Double.parseDouble(lat), Double.parseDouble(lng), Double.parseDouble(dist));
        List<PetPlaceResponse> result = list.stream()
                .map(o -> new PetPlaceResponse(o, Double.parseDouble(lat), Double.parseDouble(lng), o.getPoint().getX(), o.getPoint().getY()))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(result);
    }

}
