package com.techin.bookRecommendationApp.service;

import com.techin.bookRecommendationApp.dto.request.BookRequest;
import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookService {
    private final BookRepository bookRepository;

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

    public Book getBookById(UUID id){
        Book book =  bookRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("book not found"));
        log.debug("Fetched user {} from database", book.getId());
        return book;
    }

    public List<Book> getBooks (){
        return bookRepository.findAll();
    }
}
