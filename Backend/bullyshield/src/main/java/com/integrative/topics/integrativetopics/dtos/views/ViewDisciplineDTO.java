package com.integrative.topics.integrativetopics.dtos.views;

import com.integrative.topics.integrativetopics.model.Discipline;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
public class ViewDisciplineDTO {

    private Long disciplineId;
    private String disciplineName;
    private String gradeAvg;
    private String frequencyAvg;
    private String aboveAvgStudents;
    private String belowAvgStudents;
    private String numberOfStudents;
    private String professorName;
    private Set<ViewStudentRecordDTO> studentDTOS = new HashSet<>();


    public ViewDisciplineDTO(Discipline discipline) {
        this(discipline, discipline.getStudents().stream()
                .map(ViewStudentRecordDTO::new)
                .collect(Collectors.toSet()));
    }

    public ViewDisciplineDTO(Discipline discipline, Set<ViewStudentRecordDTO> students) {
        initialize(discipline);
        processStudents(students);
    }

    private void initialize(Discipline discipline) {
        this.disciplineId = discipline.getDisciplineId();
        this.disciplineName = discipline.getDisciplineName();
        this.professorName = discipline.getProfessor().getNome();
        this.gradeAvg = String.valueOf(discipline.getGradeAverage());
        this.frequencyAvg = String.valueOf(discipline.getFrequencyAverage());
    }

    private void processStudents(Set<ViewStudentRecordDTO> students) {
        this.studentDTOS = students;
        this.aboveAvgStudents = calculateAboveAverageStudents(students);
        this.belowAvgStudents = calculateBelowAverageStudents(students);
        this.numberOfStudents = calculateNumberOfStudents(students);
    }



    protected String calculateAboveAverageStudents(Set<ViewStudentRecordDTO> students){
        int aboveAvgStudents = 0;

        for (ViewStudentRecordDTO student : students){
            double studentGradeAvg = Double.parseDouble( student.getStudentGrade() );
            if ( studentGradeAvg >= 7 ){
                aboveAvgStudents++;
            }
        }

        return String.valueOf( aboveAvgStudents );
    }

    protected String calculateBelowAverageStudents(Set<ViewStudentRecordDTO> students){
        int belowAvgStudents = 0;

        for (ViewStudentRecordDTO student : students){
            double studentGradeAvg = Double.parseDouble( student.getStudentGrade() );
            if ( studentGradeAvg < 7 ){
                belowAvgStudents++;
            }
        }

        return String.valueOf( belowAvgStudents );
    }

    protected String calculateNumberOfStudents(Set<ViewStudentRecordDTO> students){
        return String.valueOf( students.size() );
    }
}
