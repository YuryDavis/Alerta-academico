package com.integrative.topics.integrativetopics.services;

import com.integrative.topics.integrativetopics.model.Professor;
import com.integrative.topics.integrativetopics.repository.ProfessorRepository;
import com.integrative.topics.integrativetopics.repository.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuthService {

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private ProfessorService professorService;

    public boolean authLogin(String enroll){
        Professor prof = professorService.findProfessorBy(enroll);
        return prof != null;
    }
}
