package com.integrative.topics.integrativetopics.repository;

import com.integrative.topics.integrativetopics.model.Discipline;
import com.integrative.topics.integrativetopics.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Set;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    /*@Query("SELECT DISTINCT t FROM Team t " +
            "JOIN t.disciplines d " +
            "WHERE d.professor.enrollment = :enrollment"
    )*/
    @Query(value = "SELECT DISTINCT t.* " +
            "FROM integrative_topic.team t " +
            "JOIN integrative_topic.discipline_teams dt ON t.team_id = dt.team_id " +
            "JOIN integrative_topic.discipline d ON dt.discipline_id = d.discipline_id " +
            "JOIN integrative_topic.professor p ON d.professor_id = p.professor_id " +
            "WHERE p.professor_id = :professorId", nativeQuery = true)
    List<Team> findDistinctTeamsByDisciplinesEnrollment(@Param("professorId") Long professorId);

    Set<Discipline> findDisciplinesByTeamId(@Param("teamId") Long teamId);
}
