import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Header
    greeting: "👋 Hey there!",
    about: "🚀 About Me!",
    intro: "I'm **Patrick Pei**, a **senior software engineer** building **AI-powered products** and **scalable distributed systems** at Coursera",
    contact: "📧 Drop me an **email**!",
    
    // Theme toggle
    light: "Light",
    dark: "Dark",
    
    // Language toggle
    english: "EN",
    chinese: "中文",
    
    // Sections
    background: "Background",
    experience: "💼 Professional Experience",
    education: "🎓 Education",
    skills: "🛠️ Skills",
    
    // Background section
    backgroundText1: "I'm a **Senior Software Engineer** at **Coursera**, where I build **AI-powered applications** using **large language models** and design **distributed systems** serving millions of learners. I hold an M.S. in **Computer Engineering** from **Northwestern University** (4.0 GPA).",
    backgroundText2: "I specialize in taking **LLM capabilities from prototype to production** — designing prompt architectures, building reliable AI service backends, and integrating generative AI into enterprise-scale platforms. I'm passionate about the intersection of **AI applications** and **robust systems engineering**.",
    backgroundText3: "Outside of work, I'm an active builder in the **AI developer tooling** ecosystem and enjoy **golf**, **ping pong**, and **staying active**.",
    aiProjects: "🤖 AI Projects",
    curationBuilderTitle: "AI-Powered Curation Builder Platform",
    curationBuilderContext: "Coursera",
    curationBuilderDesc: "Designed and built Coursera's AI-powered content curation platform that enables enterprise clients to build learning programs and collections using generative AI. The platform uses GPT-4.1 to generate program outlines, curate content recommendations, and filter relevant learning materials from Coursera's catalog.",
    curationBuilderBullet1: "Architected a template-based prompt system with 6+ specialized prompt executors for program outlines, domain queries, content suggestions, and collection filtering",
    curationBuilderBullet2: "Implemented multimodal document processing — PDF/DOCX uploads converted to images via PDFBox/POI for vision-capable LLM prompts with signed S3 URLs",
    curationBuilderBullet3: "Built structured JSON output parsing with retry logic and fault tolerance for reliable LLM response handling in production",
    curationBuilderBullet4: "Designed AI-ranked content suggestion pipeline integrating product search APIs with LLM-based relevance filtering",
    curationBuilderBullet5: "Migrated from Azure OpenAI to native OpenAI client with Spring Retry-based resilience patterns for production-grade LLM service reliability",
    aiToolingTitle: "AI Developer Tooling & Workflows",
    aiToolingContext: "Personal",
    aiToolingDesc: "Build and maintain AI-augmented engineering workflows using cutting-edge developer tooling for daily software development productivity.",
    aiToolingBullet1: "Integrate and configure MCP (Model Context Protocol) servers for connecting AI assistants to external tools, APIs, and data sources",
    aiToolingBullet2: "Design reusable agent skills and prompt frameworks for structured AI-assisted development workflows (brainstorming, debugging, code review, TDD)",
    aiToolingBullet3: "Leverage AI coding agents daily for full-cycle software development — from architecture design through implementation and testing",
    
    // Footer
    email: "📧 Email",
    resume: "📄 Resume",
    linkedin: "💼 LinkedIn",
    github: "💻 GitHub",
    
    // Skills categories
    languages: "💻 Languages",
    aiAndLlm: "🤖 AI & LLM",
    backendAndData: "🏗️ Backend & Data",
    cloudAndInfra: "☁️ Cloud & Infrastructure",
    
    // Job titles
    seniorSoftwareEngineer: "Senior Software Engineer",
    softwareEngineerII: "Software Engineer II",
    softwareEngineerI: "Software Engineer I",
    softwareEngineeringIntern: "Software Engineering Intern",
    
    // Education
    northwesternUniversity: "Northwestern University",
    ucSanDiego: "University of California, San Diego",
    mastersDegree: "Master of Science in Computer Engineering",
    bachelorsDegree: "Bachelor of Science in Computer Engineering",
    
    courseraSeniorBullet1: "Led a team of 5 engineers to design and build an AI-powered content curation platform using OpenAI GPT-4.1 with multimodal prompt engineering, structured output parsing, and production-grade LLM service integration for enterprise learning program creation",
    courseraSeniorBullet2: "Architected a Badge Management Platform — a stream-processing system for real-time badge issuance serving all enterprise organizations, contributing to >$10M in contract ACVs",
    courseraSeniorBullet3: "Lead a team of 3–4 engineers designing and shipping enterprise-scale platforms for contract management and badge issuance across Coursera's B2B product line",
    courseraSeniorBullet4: "Led a P0 Allowlist Management Platform project, reducing contract-level course update time from 2 weeks to under 10 seconds through near real-time data pipelines",
    courseraSeniorBullet5: "Built conflict detection workflows with Apache Airflow for automatic resolution of concurrent updates; launched internal tooling with Retool cutting engineering ops time from 95 min to <5 sec",
    courseraSeIIBullet1: "Led a team of 3 engineers to design and ship a Clips Management Platform — a fault-tolerant distributed system for clips metadata CRUD across the platform",
    courseraSeIIBullet2: "Enabled parallel processing on concurrent batch updates, reducing average metadata update time by 80%",
    courseraSeIIBullet3: "Implemented distributed Redis cache reducing P95 and P99 read latency by 80% and 92% respectively",
    courseraSeIIBullet4: "Designed application-level transactions ensuring data integrity and isolation for downstream curriculum services",
    courseraSeIBullet1: "Led Scala-to-Java service migrations, deprecating 12 legacy APIs and ~5K lines of code through a migration platform",
    courseraSeIBullet2: "Built gRPC microservices handling ~3K QPS for contract utilization data with 98% test coverage",
    courseraSeIBullet3: "Created a reusable migration library with automated double read/write, adopted by 4 teams across 15 migrations",
    samsaraBullet1: "Optimized the Config Pusher System using Go's fan-in concurrency pattern, reducing P95 latency by 90% through request batching with an in-memory queue",
    
    // Dates
    present: "Present",
    march2024Present: "March 2024 - Present",
    march2023March2024: "March 2023 - March 2024", 
    january2022March2023: "January 2022 - March 2023",
    june2021October2021: "June 2021 - October 2021",
    september2020December2021: "September 2020 - December 2021",
    september2016June2020: "September 2016 - June 2020",
    
    // Locations
    mountainViewCA: "Mountain View, CA",
    sanFranciscoCA: "San Francisco, CA",
    evanstonIL: "Evanston, IL",
    laJollaCA: "La Jolla, CA"
  },
  zh: {
    // Header
    greeting: "👋 你好！",
    about: "🚀 关于我！",
    intro: "我是**裴英健**，一名在Coursera构建**AI驱动产品**和**可扩展分布式系统**的**高级软件工程师**",
    contact: "📧 给我发**邮件**！",
    
    // Theme toggle
    light: "浅色",
    dark: "深色",
    
    // Language toggle
    english: "EN",
    chinese: "中文",
    
    // Sections
    background: "背景",
    experience: "💼 工作经历",
    education: "🎓 教育背景",
    skills: "🛠️ 技能",
    
    // Background section
    backgroundText1: "我是**Coursera**的**高级软件工程师**，负责使用**大语言模型**构建**AI驱动的应用程序**，并设计服务数百万学习者的**分布式系统**。我拥有**西北大学****计算机工程**硕士学位（GPA **4.0/4.0**）。",
    backgroundText2: "我专注于将**大语言模型能力从原型推向生产**——设计提示架构、构建可靠的AI服务后端，并将生成式AI集成到企业级平台中。我热衷于**AI应用**与**稳健系统工程**的交汇。",
    backgroundText3: "工作之余，我积极参与**AI开发者工具**生态系统建设，也喜欢打**高尔夫球**、**乒乓球**和**健身**。",
    aiProjects: "🤖 AI 项目",
    curationBuilderTitle: "AI驱动的内容策展构建平台",
    curationBuilderContext: "Coursera",
    curationBuilderDesc: "设计并构建了Coursera的AI驱动内容策展平台，使企业客户能够使用生成式AI构建学习项目和内容集合。该平台使用GPT-4.1生成项目大纲、策展内容推荐，并从Coursera目录中筛选相关学习材料。",
    curationBuilderBullet1: "设计了基于模板的提示系统，包含6+个专用提示执行器，用于项目大纲、领域查询、内容建议和集合筛选",
    curationBuilderBullet2: "实现了多模态文档处理——通过PDFBox/POI将PDF/DOCX上传文件转换为图像，用于支持视觉的LLM提示，配合签名S3 URL",
    curationBuilderBullet3: "构建了结构化JSON输出解析，具备重试逻辑和容错机制，确保生产环境中LLM响应处理的可靠性",
    curationBuilderBullet4: "设计了AI驱动的内容建议管道，将产品搜索API与基于LLM的相关性过滤相集成",
    curationBuilderBullet5: "从Azure OpenAI迁移到原生OpenAI客户端，采用Spring Retry弹性模式，实现生产级LLM服务可靠性",
    aiToolingTitle: "AI开发者工具与工作流",
    aiToolingContext: "个人项目",
    aiToolingDesc: "构建和维护AI增强的工程工作流，利用前沿开发者工具提升日常软件开发生产力。",
    aiToolingBullet1: "集成和配置MCP（模型上下文协议）服务器，将AI助手连接到外部工具、API和数据源",
    aiToolingBullet2: "设计可复用的Agent技能和提示框架，用于结构化的AI辅助开发工作流（头脑风暴、调试、代码审查、TDD）",
    aiToolingBullet3: "每日利用AI编码代理进行全周期软件开发——从架构设计到实现和测试",
    
    // Footer
    email: "📧 邮箱",
    resume: "📄 简历",
    linkedin: "💼 领英",
    github: "💻 GitHub",
    
    // Skills categories
    languages: "💻 编程语言",
    aiAndLlm: "🤖 AI & 大语言模型",
    backendAndData: "🏗️ 后端与数据",
    cloudAndInfra: "☁️ 云与基础设施",
    
    // Job titles
    seniorSoftwareEngineer: "高级软件工程师",
    softwareEngineerII: "软件工程师II",
    softwareEngineerI: "软件工程师I", 
    softwareEngineeringIntern: "软件工程实习生",
    
    // Education
    northwesternUniversity: "西北大学",
    ucSanDiego: "加利福尼亚大学圣地亚哥分校",
    mastersDegree: "计算机工程硕士",
    bachelorsDegree: "计算机工程学士",
    
    courseraSeniorBullet1: "领导5名工程师团队，设计并构建了AI驱动的内容策展平台，使用OpenAI GPT-4.1进行多模态提示工程、结构化输出解析和生产级LLM服务集成，用于企业学习项目创建",
    courseraSeniorBullet2: "设计了徽章管理平台——一个实时徽章颁发的流处理系统，服务所有企业组织，贡献超过1000万美元的合同年度价值",
    courseraSeniorBullet3: "领导3-4名工程师团队，设计并交付企业级合同管理和徽章颁发平台，服务Coursera的B2B产品线",
    courseraSeniorBullet4: "领导了P0允许列表管理平台项目，通过近实时数据管道将合同级课程更新时间从2周缩短到10秒以内",
    courseraSeniorBullet5: "使用Apache Airflow构建冲突检测工作流，自动解决并发更新；使用Retool推出内部工具，将工程运维时间从95分钟缩短到5秒以内",
    courseraSeIIBullet1: "领导3名工程师团队，设计并交付了剪辑管理平台——一个容错分布式系统，用于平台上剪辑元数据的CRUD操作",
    courseraSeIIBullet2: "启用并发批量更新的并行处理，将平均元数据更新时间减少80%",
    courseraSeIIBullet3: "实现分布式Redis缓存，将P95和P99读取延迟分别降低80%和92%",
    courseraSeIIBullet4: "设计应用层事务，确保下游课程服务的数据完整性和隔离性",
    courseraSeIBullet1: "领导Scala到Java的服务迁移，通过迁移平台淘汰12个遗留API和约5K行代码",
    courseraSeIBullet2: "构建处理约3K QPS的gRPC微服务，用于合同利用数据，测试覆盖率达98%",
    courseraSeIBullet3: "创建了具有自动双读/写功能的可复用迁移库，被4个团队在15次迁移中采用",
    samsaraBullet1: "使用Go的扇入并发模式优化配置推送系统，通过内存队列的请求批处理将P95延迟降低90%",
    
    // Dates
    present: "至今",
    march2024Present: "2024年3月 - 至今",
    march2023March2024: "2023年3月 - 2024年3月", 
    january2022March2023: "2022年1月 - 2023年3月",
    june2021October2021: "2021年6月 - 2021年10月",
    september2020December2021: "2020年9月 - 2021年12月",
    september2016June2020: "2016年9月 - 2020年6月",
    
    // Locations
    mountainViewCA: "加利福尼亚州山景城",
    sanFranciscoCA: "加利福尼亚州旧金山",
    evanstonIL: "伊利诺伊州埃文斯顿",
    laJollaCA: "加利福尼亚州拉霍亚"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load saved language preference on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 
