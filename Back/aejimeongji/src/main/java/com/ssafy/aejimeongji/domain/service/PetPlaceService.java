package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.repository.PetPlaceRepostiory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
public class PetPlaceService {

    private final PetPlaceRepostiory petPlaceRepostiory;

    public PetPlaceService(PetPlaceRepostiory petPlaceRepostiory) {
        this.petPlaceRepostiory = petPlaceRepostiory;
    }

    public List<PetPlace> findPetPlaceList() {

        return petPlaceRepostiory.findAll();
    }

    public PetPlace findPetPlace(Long petplaceId) {

        PetPlace petPlace = petPlaceRepostiory.findById(petplaceId).orElseThrow(() -> {
            return new IllegalArgumentException("해당 " + petplaceId + " 는 없습니다.");
        });

        return petPlace;
    }
}