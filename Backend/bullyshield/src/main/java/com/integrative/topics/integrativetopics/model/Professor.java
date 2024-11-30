package com.integrative.topics.integrativetopics.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "professorId")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long professorId;

    @Column(name = "prof_name")
    private String nome;

    @Column(name = "prof_enrollment", unique = true)
    private String enrollment;

    @OneToMany(mappedBy = "professor", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<Discipline> disciplines = new HashSet<>();


}
