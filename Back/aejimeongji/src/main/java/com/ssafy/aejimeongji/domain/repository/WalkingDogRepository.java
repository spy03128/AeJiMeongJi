package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.WalkingDog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WalkingDogRepository extends JpaRepository<WalkingDog, Long> {

    @Query("select wd from WalkingDog wd join fetch wd.dog d join fetch wd.walking w where wd.dog = :dogId")
    List<WalkingDog> findByDogId(@Param("dogId") Long dogId);
}
