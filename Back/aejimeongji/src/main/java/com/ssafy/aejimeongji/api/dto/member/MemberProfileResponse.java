package com.ssafy.aejimeongji.api.dto.member;

import com.ssafy.aejimeongji.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MemberProfileResponse {
    private Long memberId;
    private String email;
    private String nickname;
    private String phoneNumber;
    private LocalDateTime createdDate;

    public MemberProfileResponse(Member member) {
        memberId = member.getId();
        email = member.getEmail();
        nickname = member.getNickname();
        phoneNumber = member.getPhoneNumber();
        createdDate = member.getCreatedDate();
    }
}
