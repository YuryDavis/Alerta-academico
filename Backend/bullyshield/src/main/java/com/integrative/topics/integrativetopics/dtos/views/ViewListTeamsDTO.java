package com.integrative.topics.integrativetopics.dtos.views;

import com.integrative.topics.integrativetopics.model.Team;
import lombok.*;


@Getter
@Setter
public class ViewListTeamsDTO {

    private Long teamId;
    private String teamName;
    private String teamGlbAvg;
    private String teamFqcAvg;
    private String enrolledStudents;
    private String numberOfDisciplines;

    public ViewListTeamsDTO(Team team){
        this.teamId = team.getTeamId();
        this.teamName = team.getTeamName();
        this.teamGlbAvg = String.valueOf( team.getTeamGlbAvg() );
        this.teamFqcAvg = String.valueOf( team.getTeamFqcAvg() );

        this.enrolledStudents = String.valueOf( team.getStudents().size() );
        this.numberOfDisciplines = String.valueOf( team.getDisciplines().size() );
    }

}
