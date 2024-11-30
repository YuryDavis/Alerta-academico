package com.integrative.topics.integrativetopics.controllers;

import com.integrative.topics.integrativetopics.dtos.views.ViewListTeamsDTO;
import com.integrative.topics.integrativetopics.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    private TeamService teamService;


    @GetMapping(path = "/find/teams-by/{enrollment}")
    @ResponseStatus(HttpStatus.OK)
    public Set<ViewListTeamsDTO> findTeamsByProfessorEnrollment(@PathVariable String enrollment){
        return teamService.findTeamsByProfessorId( enrollment );
    }



}
