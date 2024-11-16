package br.aragraph.controller.exception;

import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


//Essa classe lida com as excessões que definimos no servico

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    //ERRO 422
    @ExceptionHandler(IllegalArgumentException.class )
    public ResponseEntity<String> handleArgumentException(IllegalArgumentException businessException){
        return new ResponseEntity<>(businessException.getMessage(),HttpStatus.UNPROCESSABLE_ENTITY);
        
    }
    
    //ERRO 404
    @ExceptionHandler(NoSuchElementException.class )
    public ResponseEntity<String> handleNotFoundException(NoSuchElementException businessException){
        return new ResponseEntity<>("Elemento não encontrado",HttpStatus.NOT_FOUND);  
    }
    
    
}
