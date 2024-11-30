package com.integrative.topics.integrativetopics.repository;

import com.integrative.topics.integrativetopics.model.Discipline;
import com.integrative.topics.integrativetopics.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ProfessorRepository  extends JpaRepository<Professor, Long> {

    Professor findByEnrollment(String enrollment);

    @Query("SELECT DISTINCT d FROM Discipline d " +
            "JOIN d.teams t " +
            "WHERE t.id IN (" +
            "  SELECT t2.id FROM Team t2 " +
            "  JOIN t2.disciplines d2 " +
            "  WHERE d2.professor.id = :professorId" +
            ")")
    Set<Discipline> findDisciplinesByProfessorIdInTeams(@Param("professorId") Long professorId);

    //@Query(value = "select p from Professor p where p.nome like :nome")
    //List<Professor> findByNome(@Param("nome") String nome);

    //boolean existsByNomeLike(String nome);

    //@Query(value = "select p from Professor p where p.email like :email")
    //Professor findByEmail(@Param("email") String email);

    //boolean existsByEmailLike(String email);
}
