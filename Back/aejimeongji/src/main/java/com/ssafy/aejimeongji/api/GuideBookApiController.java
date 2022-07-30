package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookRequest;
import com.ssafy.aejimeongji.domain.entity.GuideBook;
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

}

