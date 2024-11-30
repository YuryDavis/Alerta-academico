package com.integrative.topics.integrativetopics.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "studentEnrollment")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long studentId;
    @Column(name = "student_name")
    private String studentName;
    @Column(name = "student_grade_avg")
    private Double studentGradeAvg;
    @Column(name = "student_freq_avg")
    private Double sutdentFrequencyAvg;
    @Column(name = "student_enrollment")
    private String studentEnrollment;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "courseId")
    private Team team;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "student_discipline",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "discipline_id")
    )
    private Set<Discipline> disciplines = new HashSet<>();

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<DisciplineStudentInfo> disciplineStudentInfo;

}
