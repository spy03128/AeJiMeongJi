package com.ssafy.aejimeongji.api.dto.member;

import com.ssafy.aejimeongji.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MemberProfileResponse {
    private Long memberId;
    private String email;
    private String nickname;
    private String phoneNumber;
    private LocalDateTime createdDate;

    public static MemberProfileResponse convert(Member member) {
        return new MemberProfileResponse(member);
    }

    public MemberProfileResponse(Member member) {
        memberId = member.getId();
        email = member.getEmail();
        nickname = member.getNickname();
        phoneNumber = convertFormmatNumber(member.getPhoneNumber());
        createdDate = member.getCreatedDate();
    }

    private String convertFormmatNumber(String phoneNumber) {
        if (StringUtils.hasText(phoneNumber))
            return phoneNumber.substring(0, 3) + "-" + phoneNumber.substring(3, 7) + "-" + phoneNumber.substring(7, 11);;
        return phoneNumber;
    }
}
