package com.integrative.topics.integrativetopics.services;


import com.integrative.topics.integrativetopics.dtos.views.ViewDisciplineDTO;
import com.integrative.topics.integrativetopics.dtos.views.ViewListOfDisciplinesDTO;
import com.integrative.topics.integrativetopics.dtos.views.ViewStudentRecordDTO;
import com.integrative.topics.integrativetopics.model.Discipline;
import com.integrative.topics.integrativetopics.model.Professor;
import com.integrative.topics.integrativetopics.model.Team;
import com.integrative.topics.integrativetopics.repository.DisciplineRepository;
import com.integrative.topics.integrativetopics.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.Collections;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;



@Service
public class DisciplineService {

    @Autowired
    private DisciplineRepository disciplineRepository;


    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private ProfessorService professorService;

    @Autowired
    private DTOServices dtoService;


    public ViewDisciplineDTO showInfoDisciplineBy(Long disciplineId){
        Discipline discipline = findDisciplineById( disciplineId );

        Set<ViewStudentRecordDTO> enrolledStudentsDTO = discipline.getStudents().stream()
                .map( ViewStudentRecordDTO::new )
                .collect(Collectors.toSet());

        ViewDisciplineDTO viewDisciplineDTO = new  ViewDisciplineDTO( discipline, enrolledStudentsDTO );

         return viewDisciplineDTO;
    }

    public Set<ViewDisciplineDTO> showListOfDisciplinesAssociatesBy(String professorEnrollment){
        Professor professor = professorService.findProfessorBy( professorEnrollment );
        Set<Discipline> disciplines = professorService.findDisciplinesByProfessorIdInTeams( professor );

        Set<ViewDisciplineDTO> disciplinesDTOS = convertCollectionDisciplinesDTO( disciplines );

        dtoService.emptyCollectionHandling(Collections.singleton(disciplinesDTOS));

        return disciplinesDTOS;
    }

    public Set<ViewListOfDisciplinesDTO> showListOfDisciplineTeams(Long teamId){
        Optional<Team> team = teamRepository.findById(teamId);

        if ( team.isPresent() ){
            Set<Discipline> disciplines = team.get().getDisciplines();
            Set<ViewListOfDisciplinesDTO> disciplinesDTOS = convertCollectionDisciplineTeamsDTO( disciplines );
            dtoService.emptyCollectionHandling(Collections.singleton(disciplinesDTOS));
            return disciplinesDTOS;
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Team not found");
        }
        
    }

    protected Discipline findDisciplineById(Long disciplineId){
        return disciplineRepository
                .findById( disciplineId )
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Discipline not found"));
    }

    protected Set<ViewDisciplineDTO> convertCollectionDisciplinesDTO(Set<Discipline> disciplines){
        Set<ViewDisciplineDTO> disciplinesDTOS = disciplines.stream()
                .map( ViewDisciplineDTO::new )
                .collect(Collectors.toSet());

        dtoService.emptyCollectionHandling(Collections.singleton(disciplinesDTOS));

        return disciplinesDTOS;
    }

    protected Set<ViewListOfDisciplinesDTO> convertCollectionDisciplineTeamsDTO(Set<Discipline> disciplines){
        Set<ViewListOfDisciplinesDTO> disciplineDTOS = disciplines.stream()
                .map( ViewListOfDisciplinesDTO::new )
                .collect(Collectors.toSet());

        if ( disciplineDTOS.isEmpty() ){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT);
        }

        return disciplineDTOS;
    }


}
