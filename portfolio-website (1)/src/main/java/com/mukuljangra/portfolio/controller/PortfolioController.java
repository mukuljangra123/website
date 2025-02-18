package com.mukuljangra.portfolio.controller;

import com.mukuljangra.portfolio.model.*;
import com.mukuljangra.portfolio.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @Autowired
    private PersonalInfoRepository personalInfoRepository;

    @Autowired
    private EducationRepository educationRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private CertificationRepository certificationRepository;

    @GetMapping("/personal-info")
    public List<PersonalInfo> getPersonalInfo() {
        return personalInfoRepository.findAll();
    }

    @GetMapping("/education")
    public List<Education> getEducation() {
        return educationRepository.findAll();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return experienceRepository.findAll();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/certifications")
    public List<Certification> getCertifications() {
        return certificationRepository.findAll();
    }
}

