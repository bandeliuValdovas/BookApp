package com.techin.bookRecommendationApp.dto.response;

import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookResponse {
    private Book book;
    private Set<MappedCategory> categories;
}
