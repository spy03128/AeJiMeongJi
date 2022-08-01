package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.WalkingDog;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WalkingDogRepository extends JpaRepository<WalkingDog, Long> {

    @Query("select wd from WalkingDog wd join fetch wd.dog d join fetch wd.walking where wd.dog = :dogId")
    List<WalkingDog> findByDogId(@Param("dogId") Long dogId);
}
