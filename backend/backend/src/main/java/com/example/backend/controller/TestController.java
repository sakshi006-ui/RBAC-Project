package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/public")
    public String publicData() {
        return "Public Content";
    }

    @GetMapping("/api/user")
    public String userData() {
        return "User Content";
    }

    @GetMapping("/api/admin")
    public String adminData() {
        return "Admin Content";
    }
}