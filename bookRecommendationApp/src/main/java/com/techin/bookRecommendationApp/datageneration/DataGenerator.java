package com.techin.bookRecommendationApp.datageneration;

import com.github.javafaker.Faker;
import com.techin.bookRecommendationApp.Enums.Role;
import com.techin.bookRecommendationApp.entity.Book;
import com.techin.bookRecommendationApp.entity.Category;
import com.techin.bookRecommendationApp.entity.User;
import com.techin.bookRecommendationApp.repository.BookRepository;
import com.techin.bookRecommendationApp.repository.CategoryRepository;
import com.techin.bookRecommendationApp.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataGenerator {
    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;

    @PostConstruct
    public void generateData(){
        Faker faker = new Faker();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        User user = new User();
        user.setFirstName("admin");
        user.setLastName("admin");
        user.setRole(Role.ADMIN);
        user.setEmail("admin@gmail.com");
        user.setPassword(passwordEncoder.encode("1234"));

        userRepository.save(user);

        for (int i = 0; i < 10; i++){
            user = new User();
            user.setFirstName(faker.name().firstName());
            user.setLastName(faker.name().lastName());
            user.setRole(Role.USER);
            user.setEmail(faker.internet().emailAddress(user.getFirstName()).toLowerCase());
            user.setPassword(passwordEncoder.encode("1234"));

            userRepository.save(user);
        }

        for (int i = 0; i < 10; i++){
            Book book = new Book();
            book.setAuthor(faker.book().author());
            book.setName(faker.book().title());
            book.setIsbn(faker.book().genre());
            book.setDescription(faker.lorem().characters(50,250));
            book.setPagesCount(faker.number().numberBetween(100,400));

            bookRepository.save(book);
        }

        for (int i = 0; i < 10; i++){
            Category category = new Category();

            category.setName(faker.commerce().productName());
            category.addBook(bookRepository.findAll().get(faker.number().numberBetween(0,9)));
            category.addBook(bookRepository.findAll().get(faker.number().numberBetween(0,9)));

            categoryRepository.save(category);
        }


    }

}
