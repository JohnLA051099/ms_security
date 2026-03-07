package com.ms_security.controller;

import com.ms_security.model.Card;
import com.ms_security.model.ServiceResponse;
import com.ms_security.repository.CardRepository;
import com.ms_security.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/card")
@CrossOrigin("*")
public class CardController {

    @Autowired
    private CardService CardService;


    @GetMapping("/list")
    public List<Card> getAllCards() {
        return CardService.getCards();
    }

    @GetMapping("/list/{id}")
    public Optional<Card> getById(@PathVariable("id") long id) {
        return CardService.getCard(id);
    }

    @PostMapping("/save")
    public Card save (@RequestBody Card card) {

        CardService.saveCard(card);

        return card;
    }

    @PostMapping("/update")
    public ResponseEntity<ServiceResponse> update(@RequestBody Card card) {

        CardService.saveCard(card);

        ServiceResponse response = new ServiceResponse();
        response.setMessage("Tarjeta actualizada con éxito");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/delete/{id}")
    public void delete (@PathVariable("id") long id) {

        CardService.deleteCard(id);
    }



}
