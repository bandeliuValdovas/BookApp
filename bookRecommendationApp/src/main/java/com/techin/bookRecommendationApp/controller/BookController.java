package com.techin.bookRecommendationApp.controller;

import com.techin.bookRecommendationApp.dto.request.BookRequest;
import com.techin.bookRecommendationApp.dto.response.BookResponse;
import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import com.techin.bookRecommendationApp.service.BookService;
import jakarta.annotation.Nonnull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.constraints.Min;


import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping(path = "/book/{id}")
    public ResponseEntity<BookResponse> getBook(@PathVariable @Nonnull UUID id) {
        final BookResponse bookResponse= bookService.getBookById(id);
        return new ResponseEntity<>(bookResponse, HttpStatus.OK);
    }

    @GetMapping(path = "/books")
    public ResponseEntity<Page<Book>> findAllBooks(@RequestParam(defaultValue = "0") @Min(0) Integer page,
                                                   @RequestParam(defaultValue = "2") @Min(0) Integer listSize,
                                                   @RequestParam(defaultValue = "name") String sortBy,
                                                   @RequestParam(defaultValue = "false") boolean sortDesc,
                                                   @RequestParam(required = false) String contains) {
        Sort.Direction direction = sortDesc ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sort = Sort.by(direction, sortBy);
        PageRequest pageRequest = PageRequest.of(page, listSize, sort);
        return ResponseEntity.ok().body(bookService.getAllBooks(pageRequest, contains));
    }

    @PostMapping(path = "/book")
    public ResponseEntity<Book> createBook (@RequestBody BookRequest request){
        Book book = bookService.createBook(request);
        return new ResponseEntity<>(book, HttpStatus.CREATED);
    }

    @PatchMapping(path = "/book/{id}")
    public ResponseEntity<Book> updateBook (@RequestBody BookRequest request,
                                            @PathVariable @Nonnull UUID id){
        Book book = bookService.updateBook(id, request);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @DeleteMapping(path = "/book/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable @Nonnull UUID id) {
        bookService.deleteBook(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //FOR TESTING
    @GetMapping(path = "/bookcategories/{id}")
    public ResponseEntity<List<Category>> getBooksCategories(@PathVariable @Nonnull UUID id) {
        List<Category> list = bookService.getBooksCategories(id);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}