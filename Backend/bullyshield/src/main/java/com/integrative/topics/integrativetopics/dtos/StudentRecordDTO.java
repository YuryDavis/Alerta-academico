package com.integrative.topics.integrativetopics.dtos;

import com.integrative.topics.integrativetopics.model.DisciplineStudentInfo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentRecordDTO {

    private Long disciplineId;
    private String nameDiscipline;
    private String grade;
    private String frequency;

    public StudentRecordDTO(DisciplineStudentInfo disciplineStudentInfo){
        this.disciplineId = disciplineStudentInfo.getDiscipline().getDisciplineId();
        this.nameDiscipline = disciplineStudentInfo.getDiscipline().getDisciplineName();

        this.grade = String.valueOf( disciplineStudentInfo.getGrade() );
        this.frequency = String.valueOf( disciplineStudentInfo.getFrequency() );
    }
}
