import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: "aiAndLlm",
      skills: ["OpenAI API", "GPT-4.1", "Prompt Engineering", "Structured Output Parsing", "Multimodal AI", "MCP (Model Context Protocol)", "AI Agent Frameworks"]
    },
    {
      titleKey: "languages",
      skills: ["Java", "Python", "Go", "JavaScript", "TypeScript", "SQL", "C++"]
    },
    {
      titleKey: "backendAndData",
      skills: ["Spring Boot", "gRPC", "GraphQL", "Kafka", "Redis", "PostgreSQL", "DynamoDB", "MySQL", "MongoDB", "Airflow", "Elasticsearch"]
    },
    {
      titleKey: "cloudAndInfra",
      skills: ["AWS (EKS, Lambda, MSK, DynamoDB, S3, Aurora)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"]
    }
  ];

  return (
    <section className="skills">
      <h2>{t('skills')}</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{t(category.titleKey)}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills; 