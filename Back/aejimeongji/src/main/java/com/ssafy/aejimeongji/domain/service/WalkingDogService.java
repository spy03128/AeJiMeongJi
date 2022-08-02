package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.entity.Walking;
import com.ssafy.aejimeongji.domain.entity.WalkingDog;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import com.ssafy.aejimeongji.domain.repository.WalkingDogRepository;
import com.ssafy.aejimeongji.domain.repository.WalkingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WalkingDogService {

    private final WalkingDogRepository walkingDogRepository;
    private final WalkingRepository walkingRepository;
    private final DogRepository dogRepository;

    @Transactional
    public Long saveWalking(Walking walking) {
        return walkingRepository.save(walking).getId();
    }

    @Transactional
    public Long saveWalkingDog(Long dogId, Long walkingId , double walkingCalories) {

        // 강아지 엔티티 조회
        Dog dog = dogRepository.findById(dogId).orElseThrow(() ->
                new IllegalArgumentException("요청하신 정보가 존재하지 않습니다.")
        );

        // 산책 엔티티 생성 후 영속화
        Walking walking = walkingRepository.findById(walkingId).orElseThrow(() ->
                new IllegalArgumentException("요청하신 정보가 존재하지 않습니다.")
        );

        // 중계 테이블 설정
        return walkingDogRepository.save(new WalkingDog(dog, walking, walkingCalories)).getId();
    }

    public List<WalkingDog> getWalkingDogList(Long dogId) {
        return walkingDogRepository.findByDogId(dogId);
    }

    public WalkingDog WalkingDetail(Long walkingDogId) {
        return walkingDogRepository.findById(walkingDogId)
                .orElseThrow(() ->
                        new IllegalArgumentException("요청하신 정보가 존재하지 않습니다.")
                );
    }
}
