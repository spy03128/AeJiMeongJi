package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.exception.MemberNotFoundException;
import com.ssafy.aejimeongji.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    public boolean duplicatedCheck(DuplicatedCheckCondition condition) {
        return memberRepository.duplicatedCheck(condition);
    }

    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new MemberNotFoundException());
    }
}
