package com.ms_security.model;
import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "cards")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_card;
    private String name;
    private String number;
    private String type;
    private int cvv;
    private int status;

}
