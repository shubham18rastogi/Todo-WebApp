package com.shbhm.rest.basic;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public AuthBean helloWorldBean() {
        return new AuthBean("You are authenticated");
    }

}
