// package com.utilisuite.utilisuite.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.Customizer;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
//         http
//             .cors().disable()
//             .csrf().disable()
//             .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//             .formLogin().disable()
//             .securityMatcher("/**")
//             // .authorizeRequests().antMatchers("/static/css/**", "/static/js/**")
//             .authorizeHttpRequests( (authorize) -> authorize
//                 .requestMatchers("/").permitAll()
//                 .requestMatchers("/test").permitAll()
//                 .requestMatchers("/auth/login").permitAll()
// 				// .requestMatchers("/test").permitAll()
// 				// .requestMatchers("/login").permitAll()
// 				.anyRequest().authenticated()
//             );

// 		return http.build();
//     }
// }
