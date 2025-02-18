package com.mukuljangra.portfolio.repository;

import com.mukuljangra.portfolio.model.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {
}

