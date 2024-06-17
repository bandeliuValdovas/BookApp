package com.techin.bookRecommendationApp.repository;

import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {
    Optional<Book> findByIsbn (String isbn);

    @Query("SELECT c FROM Category c JOIN c.books b WHERE b.id = ?1")
    List<Category> findBooksCategories(UUID bookId);



}
