package com.techin.bookRecommendationApp.service;

import com.techin.bookRecommendationApp.dto.request.CategoryRequest;
import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import com.techin.bookRecommendationApp.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Category createCategory(CategoryRequest categoryRequest) {
        if (categoryRepository.findByName(categoryRequest.getName()).isPresent()) {
            throw new RuntimeException("category already exists");
        }
        Category category = Category.builder()
                .name(categoryRequest.getName())
                .build();
        categoryRepository.save(category);
        return category;
    }

    public Category getCategoryById(UUID id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("category not found"));
        log.debug("Fetched category {} from database", category.getId());
        return category;
    }

    public void deleteCategory(UUID id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
            log.info("{}: Deleted category from the database with ID: {}", this.getClass().getName(), id);
        } else {
            throw new EntityNotFoundException("Category was not found with ID: " + id);
        }
    }

    public List<Category> getCategories (){
        return categoryRepository.findAll();
    }

    public Category changeCategoryName(UUID id, String newName){
        Category category = getCategoryById(id);
        category.setName(newName);
        return categoryRepository.save(category);
    }

}
