package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional(readOnly = true)
public class DogService {

    private final DogRepository dogRepository;

    public DogService(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    // 강아지 프로필 상세 조회
    public Dog findDog(Long dogId) {
        return dogRepository.findById(dogId)
                .orElseThrow(() -> new IllegalArgumentException("조회하신 강아지가 존재하지 않습니다."));
    }

    // 강아지 프로필 등록
    @Transactional
    public Long saveDog(Dog dog) {
        return dogRepository.save(dog).getId();
    }
}
