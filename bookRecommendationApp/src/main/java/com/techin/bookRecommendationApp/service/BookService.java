package com.techin.bookRecommendationApp.service;

import com.techin.bookRecommendationApp.dto.request.BookRequest;
import com.techin.bookRecommendationApp.dto.response.BookResponse;
import com.techin.bookRecommendationApp.dto.response.MappedCategory;
import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import com.techin.bookRecommendationApp.repository.BookRepository;
import com.techin.bookRecommendationApp.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookService {
    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;

    public Book createBook (BookRequest bookRequest){
        if(bookRepository.findByIsbn(bookRequest.getIsbn()).isPresent()){
            throw new RuntimeException("book already exists");
        }
        Book book = Book.builder()
                .name(bookRequest.getName())
                .description(bookRequest.getDescription())
                .isbn(bookRequest.getIsbn())
                .author(bookRequest.getAuthor())
                .pagesCount(bookRequest.getPagesCount())
                .build();
        bookRepository.save(book);
        return book;
    }

    public void deleteBook (UUID id){
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            log.info("{}: Deleted book from the database with ID: {}", this.getClass().getName(), id);
        } else {
            throw new EntityNotFoundException("Book was not found with ID: " + id);
        }
    }

    public Book updateBook (UUID id, BookRequest request){
        Book bookToUpdate = bookRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("book not found with id: " + id)
        );
        bookToUpdate.setName(request.getName());
        bookToUpdate.setIsbn(request.getIsbn());
        bookToUpdate.setAuthor(request.getAuthor());
        bookToUpdate.setDescription(request.getDescription());
        bookToUpdate.setPagesCount(request.getPagesCount());
        bookRepository.save(bookToUpdate);
        return bookToUpdate;
    }

    public BookResponse getBookById(UUID id){
        Book book =  bookRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("book not found"));
        log.debug("Fetched book {} from database", book.getId());
        Set<MappedCategory> set = getBooksCategories(id)
                .stream()
                .map(o-> new MappedCategory(o.getId(),o.getName()))
                .collect(Collectors.toSet());
        BookResponse bookResponse = BookResponse.builder()
                .book(book)
                .categories(set)
                .build();
        return bookResponse;
    }

    public List<Book> getBooks (){
        return bookRepository.findAll();
    }

    public List<Category> getBooksCategories (UUID bookId){
        return bookRepository.findBooksCategories(bookId);
    }
}
