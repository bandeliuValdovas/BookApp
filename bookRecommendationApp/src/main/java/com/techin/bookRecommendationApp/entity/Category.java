package com.techin.bookRecommendationApp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;

    @ManyToMany
    @JoinTable(
            name = "categorised_books",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn (name = "book_id"))
    private Set<Book> books;

}
