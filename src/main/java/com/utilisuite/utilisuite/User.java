package com.utilisuite.utilisuite;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    // User data
    private String userName;
    private String email;
    private String password;
    private String firstName;
    private String lastName;

    // Util preferences defined by user
    private Integer tipCalculator;
    private Integer percentageCalculator;

    // ID getter and setter
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    // userName getter and setter
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    // email getter and setter
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    // password getter and setter
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
    // firstName getter and setter
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    
    // lastName getter and setter
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    
    // tipCalculator getter and setter
    public Integer getTipCalculator() {
        return tipCalculator;
    }

    public void setTipCalculator(Integer tipCalculator) {
        this.tipCalculator = tipCalculator;
    }
    
    
    // percentageCalculator getter and setter
    public Integer getPercentageCalculator() {
        return percentageCalculator;
    }

    public void setPercentageCalculator(Integer percentageCalculator) {
        this.percentageCalculator = percentageCalculator;
    }
}