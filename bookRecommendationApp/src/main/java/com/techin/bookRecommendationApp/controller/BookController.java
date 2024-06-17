package com.techin.bookRecommendationApp.controller;

import com.techin.bookRecommendationApp.dto.request.BookRequest;
import com.techin.bookRecommendationApp.dto.response.BookResponse;
import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import com.techin.bookRecommendationApp.service.BookService;
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
public class BookController {
    private final BookService bookService;

    @GetMapping(path = "/book/{id}")
    public ResponseEntity<BookResponse> getBook(@PathVariable @Nonnull UUID id) {
        final BookResponse bookResponse= bookService.getBookById(id);
        return new ResponseEntity<>(bookResponse, HttpStatus.OK);
    }

    @GetMapping(path = "/books")
    public ResponseEntity<List<Book>> getAllBooks() {
        final List<Book> books = bookService.getBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
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