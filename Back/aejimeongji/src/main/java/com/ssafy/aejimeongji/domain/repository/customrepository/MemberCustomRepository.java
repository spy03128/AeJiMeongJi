package com.ssafy.aejimeongji.domain.repository.customrepository;

import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;

public interface MemberCustomRepository {
    boolean duplicatedCheck(DuplicatedCheckCondition condition);
}
