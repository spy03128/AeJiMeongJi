package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookRequest;
import com.ssafy.aejimeongji.domain.service.GuideBookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/guide")
@RequiredArgsConstructor
public class GuideBookApiController {
    private final GuideBookService guideBookService;

    @PostMapping("")
    public ResponseEntity<ResponseDTO> saveGuide(@RequestBody GuideBookRequest newGuideDTO) {
        log.info("가이드북 등록 요청");
        Long savedId = guideBookService.saveGuideBook(newGuideDTO.convertGuideBook());
        return ResponseEntity.ok(new ResponseDTO("가이드북" + savedId + " 등록이 완료되었습니다."));
    }
}

