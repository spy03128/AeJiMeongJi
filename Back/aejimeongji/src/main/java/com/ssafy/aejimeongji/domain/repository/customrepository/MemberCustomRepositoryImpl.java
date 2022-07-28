package com.ssafy.aejimeongji.domain.repository.customrepository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.StringPath;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;
import com.ssafy.aejimeongji.domain.entity.QMember;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import static com.ssafy.aejimeongji.domain.entity.QMember.*;

@Repository
@RequiredArgsConstructor
public class MemberCustomRepositoryImpl implements MemberCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public boolean duplicatedCheck(DuplicatedCheckCondition condition) {
        Long count = queryFactory
                .select(member.count())
                .from(member)
                .where(getEqualEmail(member, condition.getEmail()), getEqualNickname(member, condition.getNickname()))
                .fetchOne();

        return count.equals(1) ? true : false;
    }

    private BooleanExpression getEqualNickname(QMember member, String nickname) {
        return member.nickname.eq(nickname);
    }

    private BooleanExpression getEqualEmail(QMember member, String email) {
        return member.email.eq(email);
    }
}
