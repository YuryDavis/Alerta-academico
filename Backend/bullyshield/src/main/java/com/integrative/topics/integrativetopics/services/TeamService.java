package com.integrative.topics.integrativetopics.services;

import com.integrative.topics.integrativetopics.dtos.views.ViewListTeamsDTO;
import com.integrative.topics.integrativetopics.model.Team;
import com.integrative.topics.integrativetopics.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private DTOServices dtoService;

    @Autowired
    private ProfessorService professorService;


    public Set<ViewListTeamsDTO> findTeamsByProfessorId(String enrollment) {
        Long professorId = professorService.findProfessorBy(enrollment).getProfessorId();

        List<Team> teamList = teamRepository.findDistinctTeamsByDisciplinesEnrollment( professorId );
        System.out.println(teamList.toString());
        Set<ViewListTeamsDTO> teamsDTOS = teamList.stream()
                .map( ViewListTeamsDTO::new )
                .collect(Collectors.toSet());

        dtoService.emptyCollectionHandling(Collections.singleton(teamsDTOS));

        return teamsDTOS;
    }

}
