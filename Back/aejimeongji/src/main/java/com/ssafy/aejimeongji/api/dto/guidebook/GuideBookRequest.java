package com.ssafy.aejimeongji.api.dto.guidebook;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.entity.image.GuideThumbnail;
import com.ssafy.aejimeongji.domain.entity.image.Image;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GuideBookRequest {
    private String title;
    private String content;
    private String category;
    private int monthMin;
    private int monthMax;
    private int weightMin;
    private int weightMax;
    private MultipartFile thumbnail;

    public GuideBook convertGuideBook() throws IOException {
        return GuideBook.builder().title(title).content(content).category(category).monthMin(monthMin).monthMax(monthMax).weightMin(weightMin).weightMax(weightMax).build();
    }

    public GuideBook toUpdateParam() throws IOException {
        return GuideBook.builder().title(title).content(content).category(category).monthMin(monthMin).monthMax(monthMax).weightMin(weightMin).weightMax(weightMax).build();
    }
}
