package com.integrative.topics.integrativetopics.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;


import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "teamName")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long teamId;

    @Column(name = "t_name")
    private String teamName;

    @Column(name = "course_name")
    private String courseName;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "discipline_teams",
            joinColumns = @JoinColumn(name = "team_id"),
            inverseJoinColumns = @JoinColumn(name = "discipline_id")
    )
    private Set<Discipline> disciplines = new HashSet<>();


    @Column(name = "team_glb_avg")
    private double teamGlbAvg = calcAvgTeam(disciplines);

    @Column(name = "team_fqc_avg")
    private int teamFqcAvg;

    @Column(name = "team_status")
    private String status;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<Student> students = new HashSet<>();

    private double calcAvgTeam(Set<Discipline> disc){
        double sum = 0;
        for (Discipline d : disc){
            sum += d.getGradeAverage();
        }

        return sum/disc.size();
    }

}
