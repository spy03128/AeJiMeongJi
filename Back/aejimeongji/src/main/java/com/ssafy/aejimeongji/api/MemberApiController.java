package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.member.MemberProfileResponse;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    @GetMapping("/{memberId}/profile")
    public ResponseEntity<MemberProfileResponse> showMemberProfile(@PathVariable Long memberId) {
        Member member = memberService.findMember(memberId);
        return ResponseEntity.ok().body(new MemberProfileResponse(member));
    }
}
