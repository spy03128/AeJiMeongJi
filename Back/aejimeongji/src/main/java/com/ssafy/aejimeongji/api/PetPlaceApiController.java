package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.CoordinateRequest;
import com.ssafy.aejimeongji.api.dto.PetPlaceResponse;
import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.service.PetPlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/petplace")
@RequiredArgsConstructor
public class PetPlaceApiController {

    private final PetPlaceService petPlaceService;

    @GetMapping
    public String getPetPlaceList(CoordinateRequest request) {

        return "S";
    }

    @GetMapping("/{petplaceId}")
    public ResponseEntity<PetPlaceResponse> getPetPlace(@PathVariable("petplaceId") Long petplaceId) {

        PetPlace petPlace = petPlaceService.findPetPlace(petplaceId);
        return ResponseEntity.ok().body(new PetPlaceResponse(petPlace));
    }


}
