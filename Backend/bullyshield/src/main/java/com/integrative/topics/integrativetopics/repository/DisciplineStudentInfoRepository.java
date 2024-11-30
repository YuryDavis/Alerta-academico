package com.integrative.topics.integrativetopics.repository;

import com.integrative.topics.integrativetopics.model.DisciplineStudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisciplineStudentInfoRepository extends JpaRepository<DisciplineStudentInfo, Long> {
}
