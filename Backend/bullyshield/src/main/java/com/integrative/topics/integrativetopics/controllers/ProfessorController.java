package com.integrative.topics.integrativetopics.controllers;

import com.integrative.topics.integrativetopics.repository.TeamRepository;
import com.integrative.topics.integrativetopics.services.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/professor")
public class ProfessorController {
    private ProfessorService professorService;

    @Autowired
    private TeamRepository teamRepository;


}
