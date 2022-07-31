package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;

public interface PetPlaceRepostiory extends JpaRepository<PetPlace, Long> {
}
