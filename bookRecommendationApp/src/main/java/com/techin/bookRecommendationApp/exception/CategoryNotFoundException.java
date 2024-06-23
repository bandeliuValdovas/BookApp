package com.techin.bookRecommendationApp.exception;

public class CategoryNotFoundException extends RuntimeException{

    public CategoryNotFoundException(String message){super (String.format(message));}
}
