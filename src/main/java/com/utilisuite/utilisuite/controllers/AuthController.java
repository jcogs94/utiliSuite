// package com.utilisuite.utilisuite.controllers;

// import org.springframework.stereotype.Controller;
// import org.springframework.validation.annotation.Validated;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;

// import com.utilisuite.utilisuite.models.LoginResponse;
// import com.utilisuite.utilisuite.models.User;


// @Controller
// @RequestMapping(path="/auth")
// public class AuthController {
//     @PostMapping(path="/login")
//     public LoginResponse login(@RequestBody @Validated User request) {
//         return LoginResponse.builder()
//                 .accessToken("Bla bla bla")
//                 .build();
//     }
// }
