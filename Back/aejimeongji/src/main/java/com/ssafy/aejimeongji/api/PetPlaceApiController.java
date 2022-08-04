package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.petPlace.CoordinateRequest;
import com.ssafy.aejimeongji.api.dto.petPlace.PetPlaceResponse;
import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.service.PetPlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
    public ResponseEntity<?> getNearPetPlaceList(@RequestParam(value = "lat") Double lat,
                                                 @RequestParam(value = "lng") Double lng) {

        List<PetPlace> list = petPlaceService.getNearPetPlaceList(lat, lng, 0.3);
        List<PetPlaceResponse> result = list.stream()
                .map(o -> new PetPlaceResponse(o, lat, lng))
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(result);
    }


}
