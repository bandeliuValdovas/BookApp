package com.techin.bookRecommendationApp.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookRequest {
    private String name;
    private String description;
    private String isbn;
    private int pagesCount;
    private String author;
}
