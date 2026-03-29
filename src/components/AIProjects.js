import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AIProjects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: "curationBuilderTitle",
      contextKey: "curationBuilderContext",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      descriptionKey: "curationBuilderDesc",
      bulletKeys: [
        "curationBuilderBullet1",
        "curationBuilderBullet2",
        "curationBuilderBullet3",
        "curationBuilderBullet4",
        "curationBuilderBullet5"
      ],
      technologies: ["Java", "Spring Boot", "OpenAI GPT-4.1", "Prompt Engineering", "Multimodal AI", "GraphQL", "gRPC", "DynamoDB", "AWS S3"],
      dateRange: "2024 – Present"
    },
    {
      titleKey: "aiToolingTitle",
      contextKey: "aiToolingContext",
      website: null,
      logo: null,
      descriptionKey: "aiToolingDesc",
      bulletKeys: [
        "aiToolingBullet1",
        "aiToolingBullet2",
        "aiToolingBullet3"
      ],
      technologies: ["MCP (Model Context Protocol)", "Agent Skills", "Prompt Engineering", "AI-Assisted Development"],
      dateRange: "2024 – Present"
    }
  ];

  return (
    <section className="ai-projects">
      <h2>{t('aiProjects')}</h2>
      {projects.map((project, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <h3>
              {project.logo && (
                <>
                  <img
                    src={project.logo}
                    alt={`${t(project.contextKey)} logo`}
                    className="company-logo"
                    onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline';}}
                  />
                  <span className="emoji-fallback" style={{display: 'none'}}>🏢</span>
                  {' '}
                </>
              )}
              {project.website ? (
                <a href={project.website} target="_blank" rel="noopener noreferrer">{t(project.titleKey)}</a>
              ) : (
                t(project.titleKey)
              )}
              {' · '}
              <span style={{fontWeight: 400, fontSize: '0.9em'}}>{t(project.contextKey)}</span>
            </h3>
            <span className="date">📅 {project.dateRange}</span>
          </div>
          <p>{t(project.descriptionKey)}</p>
          <ul className="job-description">
            {project.bulletKeys.map((key, bulletIndex) => (
              <li key={bulletIndex}>{t(key)}</li>
            ))}
          </ul>
          <div className="technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AIProjects;
