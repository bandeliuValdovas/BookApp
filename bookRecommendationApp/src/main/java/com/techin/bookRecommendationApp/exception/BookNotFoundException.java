package com.techin.bookRecommendationApp.exception;

public class BookNotFoundException extends RuntimeException{

    public BookNotFoundException(String message){super (String.format(message));}
}
