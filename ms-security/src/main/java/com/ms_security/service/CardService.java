package com.ms_security.service;

import com.ms_security.model.Card;
import com.ms_security.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    CardRepository cardRepository;


    public List<Card> getCards() {


        return cardRepository.findAll();
    }


    public Optional<Card> getCard(Long id) {

        return cardRepository.findById(id);
    }


    public void saveCard(Card card) {

        cardRepository.save(card);
    }

    public void deleteCard(Long id) {

        cardRepository.deleteById(id);
    }




}
