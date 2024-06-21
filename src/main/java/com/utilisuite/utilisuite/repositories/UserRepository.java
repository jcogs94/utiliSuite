package com.utilisuite.utilisuite.repositories;

import org.springframework.data.repository.CrudRepository;

import com.utilisuite.utilisuite.models.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface UserRepository extends CrudRepository<User, Integer> {

}
