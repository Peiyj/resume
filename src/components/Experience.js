import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TECH_TERMS = [
  'OpenAI GPT-4.1', 'Apache Airflow', 'Spring Boot', 'Spring Retry',
  '.NET Framework', 'REST API', 'ML Kit', 'ML kit',
  'Java', 'gRPC', 'Scala', 'GraphQL', 'Python', 'GoLang', 'Go ',
  'JavaScript', 'TypeScript', 'Swift', 'Objective C', 'SystemVerilog',
  'Redis', 'Kafka', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB',
  'AWS', 'Docker', 'Kubernetes', 'React', 'Retool', 'Vsim', 'FPGA',
  'Jenkins', 'Firestore', 'Matplotlib', 'Terraform', 'C++'
];

const METRIC_PATTERN = /(\d+[.\d]*\s*%|>\$\d+[KMB]|\$\d+[KMB]|~?\d+[KMB]\s*(?:QPS|LOC)|~?\d+(?:[.]\d+)?\s*(?:QPS|GB)|P\d+(?:\s*(?:and|\/)\s*P\d+)?|\d+\s*(?:seconds?|minutes?|weeks?|hours?|min|sec))/gi;

const highlightText = (text) => {
  const techPattern = TECH_TERMS
    .sort((a, b) => b.length - a.length)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const combined = new RegExp(`(${METRIC_PATTERN.source}|${techPattern})`, 'gi');

  const parts = [];
  let lastIndex = 0;
  let match;
  const regex = new RegExp(combined.source, 'gi');

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const val = match[0];
    const isMetric = METRIC_PATTERN.test(val);
    METRIC_PATTERN.lastIndex = 0;
    parts.push(
      <span key={match.index} className={isMetric ? 'highlight-metric' : 'highlight-tech'}>
        {val}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
};

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      emoji: "📚",
      titleEmoji: "👨‍💻",
      titleKey: "seniorSoftwareEngineer",
      dateKey: "march2024Present",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraLeadDesc",
      technologies: ["Java", "gRPC", "OpenAI GPT-4.1", "Spring Boot", "AWS DynamoDB", "AWS Lambda", "Apache Airflow", "Terraform", "Retool", "Kafka", "PostgreSQL", "GraphQL"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      emoji: "📚",
      titleEmoji: "👨‍💻",
      titleKey: "softwareEngineerII",
      dateKey: "march2023March2024",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraSeII",
      technologies: ["Java", "Scala", "Spring Boot", "GraphQL", "Redis", "AWS Aurora", "MySQL", "Distributed Systems"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      emoji: "📚",
      titleEmoji: "👨‍💻",
      titleKey: "softwareEngineerI",
      dateKey: "january2022March2023",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraSeI",
      technologies: ["Java", "Scala", "gRPC", "GraphQL", "JavaScript", "AWS RDS", "MySQL"]
    },
    {
      company: "Samsara",
      website: "https://www.samsara.com/",
      logo: "/src/assets/logos/samsara.png",
      emoji: "📡",
      titleEmoji: "💻",
      titleKey: "softwareEngineeringIntern",
      dateKey: "june2021October2021",
      locationKey: "sanFranciscoCA",
      descriptionKey: "samsaraDesc",
      technologies: ["GoLang", "MongoDB", "React", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      emoji: "📚",
      titleEmoji: "🎯",
      titleKey: "softwareEngineeringIntern",
      dateKey: "january2021March2021",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraInternDesc",
      technologies: ["Java", "Scala", "gRPC", "JavaScript", "TypeScript", "MongoDB", "HTML", "CSS"]
    },
    {
      company: "UC San Diego",
      website: "https://ucsd.edu/",
      logo: "/src/assets/logos/ucsd.png",
      emoji: "🏫",
      titleEmoji: "📖",
      titleKey: "teachingAssistant",
      dateKey: "march2020September2020",
      locationKey: "sanDiegoCA",
      descriptionKey: "ucsdTaDesc",
      technologies: ["SystemVerilog", "C", "FPGA", "Vsim", "Hardware Design", "Digital Logic"]
    },
    {
      company: "Roche",
      website: "https://www.roche.com/",
      logo: "/src/assets/logos/roche.png",
      emoji: "🧬",
      titleEmoji: "💻",
      titleKey: "softwareEngineeringIntern",
      dateKey: "june2019September2019",
      locationKey: "tucsonAZ",
      descriptionKey: "rocheDesc",
      technologies: ["Python", "Java", "SQL", "Docker", "Jenkins"]
    },
    {
      company: "C2 Group",
      website: "https://www.c2group.us/",
      logo: "/src/assets/logos/c2group.png",
      emoji: "⚙️",
      titleEmoji: "💻",
      titleKey: "softwareEngineeringIntern",
      dateKey: "july2018October2018",
      locationKey: "sanDiegoCA",
      descriptionKey: "c2GroupDesc",
      technologies: ["C++", "Image Processing", "Multithreading"]
    },
    {
      company: "UC San Diego Health",
      website: "https://health.ucsd.edu/",
      logo: "/src/assets/logos/ucsd-health.png",
      emoji: "🏥",
      titleEmoji: "💻",
      titleKey: "softwareEngineerIntern",
      dateKey: "april2018June2018",
      locationKey: "sanDiegoCA",
      descriptionKey: "ucsdHealthDesc",
      technologies: [".NET Framework", "MongoDB", "REST API", "Machine Learning", "Python", "Matplotlib", "Data Analysis"]
    }
  ];

  return (
    <section className="experience">
      <h2>{t('experience')}</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <h3>
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="company-logo"
                onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline';}}
              />
              <span className="emoji-fallback" style={{display: 'none'}}>{experience.emoji}</span>
              {' '}
              <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.company}</a>
            </h3>
            <span className="date">📅 {t(experience.dateKey)}</span>
            <span className="location">📍 {t(experience.locationKey)}</span>
          </div>
          <h4>{experience.titleEmoji} {t(experience.titleKey)}</h4>
          <p>{highlightText(t(experience.descriptionKey))}</p>
          <div className="technologies">
            {experience.technologies.map((tech, techIndex) => (
              <span key={techIndex}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
