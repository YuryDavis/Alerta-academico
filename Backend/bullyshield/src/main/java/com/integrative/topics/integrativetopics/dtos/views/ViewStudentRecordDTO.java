package com.integrative.topics.integrativetopics.dtos.views;

import com.integrative.topics.integrativetopics.dtos.StudentRecordDTO;
import com.integrative.topics.integrativetopics.model.DisciplineStudentInfo;
import com.integrative.topics.integrativetopics.model.Student;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Getter
@Setter
public class ViewStudentRecordDTO {

    private Long studentId;

    private String studentName;

    private String studentEnrollment;

    private String studentGrade;

    private String studentFrequency;

    private Set<StudentRecordDTO> studentRecordDTO = new HashSet<>();

    public ViewStudentRecordDTO(Student student){
        this.studentId = student.getStudentId();
        this.studentName = student.getStudentName();
        this.studentEnrollment = student.getStudentEnrollment();

        this.studentGrade = String.valueOf( student.getStudentGradeAvg() );
        this.studentFrequency = String.valueOf( student.getSutdentFrequencyAvg() );
        this.studentRecordDTO = convertInfoToDTO( student.getDisciplineStudentInfo() );
    }


    public Set<StudentRecordDTO> convertInfoToDTO(Set<DisciplineStudentInfo> disciplineStudentInfo){
        return disciplineStudentInfo.stream()
                .map( StudentRecordDTO::new )
                .collect(Collectors.toSet());
    }
}
