package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.member.DuplicationCheckResponse;
import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;
import com.ssafy.aejimeongji.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final MemberService memberService;

    @PostMapping("/duplicationcheck")
    public ResponseEntity<DuplicationCheckResponse> checkDuplicated(@RequestBody DuplicatedCheckCondition condition) {
        boolean resultStatus = memberService.duplicatedCheck(condition);
        String message = makeDuplicateCheckResponseMessage(condition, resultStatus);
        if (resultStatus)
            return ResponseEntity.ok().body(new DuplicationCheckResponse(resultStatus, message));
        return ResponseEntity.badRequest().body(new DuplicationCheckResponse(resultStatus, message));
    }

    private String makeDuplicateCheckResponseMessage(DuplicatedCheckCondition condition, boolean resultStatus) {
        String message = resultStatus ? "사용가능한 " : "이미 존재하는 ";
        message += addMessage(condition);
        return message;
    }

    private String addMessage(DuplicatedCheckCondition condition) {
        return condition.getEmail() != null ? "이메일입니다." : "닉네임입니다.";
    }
}
