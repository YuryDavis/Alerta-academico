package com.integrative.topics.integrativetopics.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "enrollment")
public class UserAuth {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long authId;

    @Column(name = "prof_enrollment", unique = true)
    private String enrollment;
}
