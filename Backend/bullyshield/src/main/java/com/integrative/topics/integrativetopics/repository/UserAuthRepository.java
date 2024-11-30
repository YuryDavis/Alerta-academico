package com.integrative.topics.integrativetopics.repository;

import com.integrative.topics.integrativetopics.model.Professor;
import com.integrative.topics.integrativetopics.model.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuthRepository extends JpaRepository<UserAuth, String> {
}
