package com.techin.bookRecommendationApp.controller;

import com.techin.bookRecommendationApp.dto.request.CategoryRequest;
import com.techin.bookRecommendationApp.entity.Category;
import com.techin.bookRecommendationApp.service.CategoryService;
import jakarta.annotation.Nonnull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping(path = "/category/{id}")
    public ResponseEntity<Category> getBook(@PathVariable @Nonnull UUID id) {
        final Category category = categoryService.getCategoryById(id);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @GetMapping(path = "/categories")
    public ResponseEntity<List<Category>> getAllCategories() {
        final List<Category> categories = categoryService.getCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @PostMapping(path = "/category")
    public ResponseEntity<Category> createCategory(@RequestBody CategoryRequest request) {
        Category category = categoryService.createCategory(request);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PatchMapping(path = "/category/{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody CategoryRequest request,
                                                   @PathVariable @Nonnull UUID id) {
        Category category = categoryService.changeCategoryName(id, request.getName());
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @DeleteMapping(path = "/category/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable @Nonnull UUID id) {
        categoryService.deleteCategory(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}