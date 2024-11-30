package com.integrative.topics.integrativetopics.repository;


import com.integrative.topics.integrativetopics.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
