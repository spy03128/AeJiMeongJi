package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookRequest;
import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookResponse;
import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.service.GuideBookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/guide")
@RequiredArgsConstructor
public class GuideBookApiController {
    private final GuideBookService guideBookService;

    @GetMapping("/{guideId}")
    public ResponseEntity<GuideBookResponse> getGuideBook(@PathVariable Long guideId) {
        log.info("가이드북 {}번 상세 정보 요청", guideId);
        GuideBook guideBook = guideBookService.findGuideBook(guideId);
        return ResponseEntity.ok().body(new GuideBookResponse(guideBook));
    }

    @PostMapping("")
    public ResponseEntity<ResponseDTO> saveGuide(@RequestBody GuideBookRequest newGuideDTO) {
        log.info("가이드북 등록 요청");
        Long savedId = guideBookService.saveGuideBook(newGuideDTO.convertGuideBook());
        return ResponseEntity.ok(new ResponseDTO("가이드북" + savedId + " 등록이 완료되었습니다."));
    }
}

