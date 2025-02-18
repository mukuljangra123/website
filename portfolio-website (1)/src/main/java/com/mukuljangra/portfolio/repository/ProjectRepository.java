package com.mukuljangra.portfolio.repository;

import com.mukuljangra.portfolio.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}

