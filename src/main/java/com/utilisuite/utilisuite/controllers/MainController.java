// package com.utilisuite.utilisuite.controllers;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.servlet.ModelAndView;

// import com.utilisuite.utilisuite.UserRepository;


// @Controller
// @RequestMapping(path="/")
// public class MainController {
//     @Autowired

//     private UserRepository userRepository;

//     @GetMapping(path="/")
//     public @ResponseBody String home () {
//         return new String("Hi");
//     }
    
//     @GetMapping(path="/test")
//     public ModelAndView test () {
//         ModelAndView mav = new ModelAndView("index");
//         return mav;
//     }
// }
