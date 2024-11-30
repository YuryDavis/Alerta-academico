package com.integrative.topics.integrativetopics.services;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Set;

@Service
public class DTOServices {
    public void emptyCollectionHandling(Set<Object> collection){
        if (collection.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);
        }
    }
}
