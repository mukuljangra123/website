package com.mukuljangra.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class PersonalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String title;
    private String location;
    private String email;
    private String phone;
    private String linkedIn;
    private String github;
    private String aboutMe;

    // Getters and setters
}

