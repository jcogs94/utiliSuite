package com.utilisuite.utilisuite.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Quote {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    // Quote data
    private String whoSaid;
    
    @Column (unique=true)
    private String quote;
    
    // ID getter and setter
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    // whoSaid getter and setter
    public String getWhoSaid() {
        return whoSaid;
    }

    public void setWhoSaid(String whoSaid) {
        this.whoSaid = whoSaid;
    }


    // quote getter and setter
    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }
}