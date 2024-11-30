package com.integrative.topics.integrativetopics.controllers;

import com.integrative.topics.integrativetopics.model.UserAuth;
import com.integrative.topics.integrativetopics.services.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserAuthController {

    @Autowired
    private UserAuthService userAuthService;

    @PostMapping()
    public boolean authUser(@RequestBody UserAuth userAuth){
        return userAuthService.authLogin(userAuth.getEnrollment());
    }

}
