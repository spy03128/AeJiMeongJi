package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.member.MemberModifyRequest;
import com.ssafy.aejimeongji.api.dto.member.MemberProfileResponse;
import com.ssafy.aejimeongji.api.dto.member.MemberSignUpRequest;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("/member/{memberId}/profile")
    public ResponseEntity<MemberProfileResponse> showMemberProfile(@PathVariable Long memberId) {
        Member member = memberService.findMember(memberId);
        return ResponseEntity.ok().body(new MemberProfileResponse(member));
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody MemberSignUpRequest request) {
        memberService.joinMember(request.convertMember(passwordEncoder));
        return ResponseEntity.ok(new ResponseDTO("회원가입이 완료되었습니다."));
    }

    @PutMapping("/member/{memberId}")
    public ResponseEntity<ResponseDTO> modifyProfile(@PathVariable Long memberId, @RequestBody MemberModifyRequest request) {
        memberService.updateMember(memberId, request.getNickname(), request.getPassword(), request.getPhoneNumber());
        return ResponseEntity.ok(new ResponseDTO("회원 정보 수정이 완료되었습니다."));
    }

    @DeleteMapping("/")
    public ResponseEntity<ResponseDTO> deleteMember(@PathVariable Long memberId) {
        memberService.deleteMember(memberId);
        return ResponseEntity.ok(new ResponseDTO("회원탈퇴가 완료되었습니다."));
    }
}
