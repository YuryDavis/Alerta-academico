package com.integrative.topics.integrativetopics.controllers;


import com.integrative.topics.integrativetopics.dtos.views.ViewDisciplineDTO;
import com.integrative.topics.integrativetopics.dtos.views.ViewListOfDisciplinesDTO;
import com.integrative.topics.integrativetopics.services.DisciplineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.Set;

@RestController
@RequestMapping(path = "/api/discipline")
public class DisciplineController {

    @Autowired
    private DisciplineService disciplineService;

    @GetMapping(path = "/show/info/discipline/{disciplineId}")
    @ResponseStatus(HttpStatus.OK)
    public ViewDisciplineDTO showViewDisciplineInformation(@PathVariable Long disciplineId){

        ViewDisciplineDTO viewDisciplineDTO = disciplineService.showInfoDisciplineBy( disciplineId );
        return viewDisciplineDTO;
    }

    @GetMapping(path = "/list/disciplines")
    @ResponseStatus(HttpStatus.OK)
    public Set<ViewDisciplineDTO> listDisciplinesFromTeamsAssociatedByProfessor(@RequestParam String enrollment){
        return disciplineService.showListOfDisciplinesAssociatesBy( enrollment );
    }

    @GetMapping(path = "/list/disciplines-by/{teamId}")
    public Set<ViewListOfDisciplinesDTO> showListOfDisciplineTeams(@PathVariable Long teamId){
        return disciplineService.showListOfDisciplineTeams(teamId);

    }
}
