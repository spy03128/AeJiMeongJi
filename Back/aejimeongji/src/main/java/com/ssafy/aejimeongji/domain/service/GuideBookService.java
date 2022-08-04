package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.repository.GuideBookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GuideBookService {

    private final GuideBookRepository guideBookRepository;

    // 강아지 홈 연령별 가이드 목록 조회
    public List<GuideBook> ageCustomizedGuideBookList(int targetAge) {
        List<GuideBook> ageCustomizedGuideList = guideBookRepository.findByDogAgeEquals(targetAge);
        List<GuideBook> fixedGuideList = guideBookRepository.findByDogAgeAndDogWeight(9999, 9999);

        List<GuideBook> customizedGuideList = new ArrayList<>();
        customizedGuideList.addAll(ageCustomizedGuideList);
        customizedGuideList.addAll(fixedGuideList);
        return customizedGuideList;
    }

    // 강아지 홈 고정 가이드 목록 조회
    public List<GuideBook> fixedGuideBookList() {
        return guideBookRepository.findByDogAgeAndDogWeight(9999, 9999);
    }

    // 카테고리별 가이드 목록 조회
    public List<GuideBook> categorizedGuideBookList(String category) {
        return guideBookRepository.findByCategory(category);
    }

    // 가이드 상세 조회
    public GuideBook findGuideBook(Long guideBookId) {
        return guideBookRepository.findById(guideBookId)
                .orElseThrow(() -> new IllegalArgumentException("조회하신 가이드가 존재하지 않습니다."));
    }

    // 가이드 생성
    @Transactional
    public Long saveGuideBook(GuideBook guideBook) {
        return guideBookRepository.save(guideBook).getId();
    }

    // 가이드 수정
    @Transactional
    public Long updateGuideBook(Long guideId, String newTitle, String newContent, String newCategory, int newDogAge, int newDogWeight) {
        GuideBook findGuide = findGuideBook(guideId);
        findGuide.updateGuideBook(newTitle, newContent, newCategory, newDogAge, newDogWeight);
        return findGuide.getId();
    }

    // 가이드 삭제
    @Transactional
    public void deleteGuideBook(Long guidId) {
        GuideBook findGuide = findGuideBook(guidId);
        guideBookRepository.delete(findGuide);
    }
}
