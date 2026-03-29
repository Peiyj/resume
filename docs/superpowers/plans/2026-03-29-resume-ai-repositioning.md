# Resume AI Repositioning — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the resume from "backend/distributed systems engineer" to "senior engineer building AI-powered products" for LLM/AI Application Engineer roles — across both the React web resume and LaTeX PDF.

**Architecture:** Content lives in `LanguageContext.js` (EN + ZH translations). Components consume translations via `useLanguage()` hook. New `AIProjects.js` component follows the same pattern as `Experience.js`. LaTeX PDF mirrors all content changes in English only.

**Tech Stack:** React 18, CSS (existing styles), LaTeX (pdflatex)

**Spec:** `docs/superpowers/specs/2026-03-29-resume-ai-repositioning-design.md`

---

## Chunk 1: Content Layer — LanguageContext.js

> **Dependency note:** After Chunk 1, the UI will show raw translation key names for removed keys (e.g. `courseraLeadDesc`) because the consuming components (`Experience.js`, `Skills.js`, `Entrepreneurship.js`) are not updated until Chunk 2. This is expected. Do not treat missing-key warnings as failures — they resolve after Chunk 2.

### Task 1: Update English translations in LanguageContext.js

**Files:**
- Modify: `src/contexts/LanguageContext.js`

- [ ] **Step 1: Update header/background English strings**

In `src/contexts/LanguageContext.js`, replace the following English translation keys:

Replace `intro`:
```javascript
intro: "I'm **Patrick Pei**, a **senior software engineer** building **AI-powered products** and **scalable distributed systems** at Coursera",
```

Replace `backgroundText1`:
```javascript
backgroundText1: "I'm a **Senior Software Engineer** at **Coursera**, where I build **AI-powered applications** using **large language models** and design **distributed systems** serving millions of learners. I hold an M.S. in **Computer Engineering** from **Northwestern University** (4.0 GPA).",
```

Replace `backgroundText2`:
```javascript
backgroundText2: "I specialize in taking **LLM capabilities from prototype to production** — designing prompt architectures, building reliable AI service backends, and integrating generative AI into enterprise-scale platforms. I'm passionate about the intersection of **AI applications** and **robust systems engineering**.",
```

Replace `backgroundText3`:
```javascript
backgroundText3: "Outside of work, I'm an active builder in the **AI developer tooling** ecosystem and enjoy **golf**, **ping pong**, and **staying active**.",
```

- [ ] **Step 2: Add AI Projects English translation keys**

Add these keys to `translations.en` (after the `backgroundText3` line):

```javascript
// AI Projects section
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
```

- [ ] **Step 3: Replace experience English descriptions with bullet keys**

Remove these keys from `translations.en`:
- `courseraLeadDesc`
- `courseraSeII`
- `courseraSeI`
- `samsaraDesc`
- `courseraInternDesc`
- `ucsdTaDesc`
- `rocheDesc`
- `c2GroupDesc`
- `ucsdHealthDesc`

Add these replacement keys:

```javascript
// Experience bullets - Senior SWE
courseraSeniorBullet1: "Lead a team of 3–4 engineers designing and shipping enterprise-scale platforms for contract management and badge issuance across Coursera's B2B product line",
courseraSeniorBullet2: "Architected a Badge Management Platform — a stream-processing system for real-time badge issuance serving all enterprise organizations, contributing to >$10M in contract ACVs",
courseraSeniorBullet3: "Led a P0 Allowlist Management Platform project, reducing contract-level course update time from 2 weeks to under 10 seconds through near real-time data pipelines",
courseraSeniorBullet4: "Built conflict detection workflows with Apache Airflow for automatic resolution of concurrent updates; launched internal tooling with Retool cutting engineering ops time from 95 min to <5 sec",

// Experience bullets - SWE II
courseraSeIIBullet1: "Led a team of 3 engineers to design and ship a Clips Management Platform — a fault-tolerant distributed system for clips metadata CRUD across the platform",
courseraSeIIBullet2: "Enabled parallel processing on concurrent batch updates, reducing average metadata update time by 80%",
courseraSeIIBullet3: "Implemented distributed Redis cache reducing P95 and P99 read latency by 80% and 92% respectively",
courseraSeIIBullet4: "Designed application-level transactions ensuring data integrity and isolation for downstream curriculum services",

// Experience bullets - SWE I
courseraSeIBullet1: "Led Scala-to-Java service migrations, deprecating 12 legacy APIs and ~5K lines of code through a migration platform",
courseraSeIBullet2: "Built gRPC microservices handling ~3K QPS for contract utilization data with 98% test coverage",
courseraSeIBullet3: "Created a reusable migration library with automated double read/write, adopted by 4 teams across 15 migrations",

// Experience bullets - Samsara
samsaraBullet1: "Optimized the Config Pusher System using Go's fan-in concurrency pattern, reducing P95 latency by 90% through request batching with an in-memory queue",
```

- [ ] **Step 4: Update skills category keys (English)**

Remove these keys from `translations.en`:
- `frameworks: "🏗️ Frameworks"`
- `tools: "🔧 Tools"`
- `technologies: "⚡ Technologies"`

Add these keys:

```javascript
aiAndLlm: "🤖 AI & LLM",
backendAndData: "🏗️ Backend & Data",
cloudAndInfra: "☁️ Cloud & Infrastructure",
```

Keep the existing `languages: "💻 Languages"` key unchanged.

- [ ] **Step 5: Remove Entrepreneurship English keys**

Remove from `translations.en`:
- `entrepreneurship: "🚀 Entrepreneurship"`
- `coFounderCTO: "Co-Founder & CTO"`
- `solemateDesc: "Developed the Solemate iOS App..."`

- [ ] **Step 6: Remove unused date/location keys (English)**

Remove from `translations.en`:
- `january2021March2021`
- `march2020September2020`
- `june2019September2019`
- `july2018October2018`
- `april2018June2018`
- `january2017August2017`

- [ ] **Step 7: Verify no syntax errors**

Run: `cd /Users/ppei/Desktop/resume && npm start`
Expected: Dev server starts without JS compilation errors. **Note:** The UI will show raw key names for removed keys (e.g. `courseraLeadDesc` rendered as literal text) — this is expected until Chunk 2 updates the consuming components.

- [ ] **Step 8: Commit**

```bash
git add src/contexts/LanguageContext.js
git commit -m "Update English translations for AI repositioning

Rewrite intro/background with AI-first positioning. Add AI Projects
translation keys. Replace experience paragraphs with bullet keys.
Reorganize skills categories. Remove entrepreneurship and dropped
role translations."
```

### Task 2: Update Chinese translations in LanguageContext.js

**Files:**
- Modify: `src/contexts/LanguageContext.js`

- [ ] **Step 1: Update header/background Chinese strings**

Replace `intro` in `translations.zh`:
```javascript
intro: "我是**裴英健**，一名在Coursera构建**AI驱动产品**和**可扩展分布式系统**的**高级软件工程师**",
```

Replace `backgroundText1` in `translations.zh`:
```javascript
backgroundText1: "我是**Coursera**的**高级软件工程师**，负责使用**大语言模型**构建**AI驱动的应用程序**，并设计服务数百万学习者的**分布式系统**。我拥有**西北大学****计算机工程**硕士学位（GPA **4.0/4.0**）。",
```

Replace `backgroundText2` in `translations.zh`:
```javascript
backgroundText2: "我专注于将**大语言模型能力从原型推向生产**——设计提示架构、构建可靠的AI服务后端，并将生成式AI集成到企业级平台中。我热衷于**AI应用**与**稳健系统工程**的交汇。",
```

Replace `backgroundText3` in `translations.zh`:
```javascript
backgroundText3: "工作之余，我积极参与**AI开发者工具**生态系统建设，也喜欢打**高尔夫球**、**乒乓球**和**健身**。",
```

- [ ] **Step 2: Add AI Projects Chinese translation keys**

Add to `translations.zh`:

```javascript
// AI Projects section
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
```

- [ ] **Step 3: Replace experience Chinese descriptions with bullet keys**

Remove these keys from `translations.zh`:
- `courseraLeadDesc`
- `courseraSeII`
- `courseraSeI`
- `samsaraDesc`
- `courseraInternDesc`
- `ucsdTaDesc`
- `rocheDesc`
- `c2GroupDesc`
- `ucsdHealthDesc`

Add these replacement keys to `translations.zh`:

```javascript
// Experience bullets - Senior SWE
courseraSeniorBullet1: "领导3-4名工程师团队，设计并交付企业级合同管理和徽章颁发平台，服务Coursera的B2B产品线",
courseraSeniorBullet2: "设计了徽章管理平台——一个实时徽章颁发的流处理系统，服务所有企业组织，贡献超过1000万美元的合同年度价值",
courseraSeniorBullet3: "领导了P0允许列表管理平台项目，通过近实时数据管道将合同级课程更新时间从2周缩短到10秒以内",
courseraSeniorBullet4: "使用Apache Airflow构建冲突检测工作流，自动解决并发更新；使用Retool推出内部工具，将工程运维时间从95分钟缩短到5秒以内",

// Experience bullets - SWE II
courseraSeIIBullet1: "领导3名工程师团队，设计并交付了剪辑管理平台——一个容错分布式系统，用于平台上剪辑元数据的CRUD操作",
courseraSeIIBullet2: "启用并发批量更新的并行处理，将平均元数据更新时间减少80%",
courseraSeIIBullet3: "实现分布式Redis缓存，将P95和P99读取延迟分别降低80%和92%",
courseraSeIIBullet4: "设计应用层事务，确保下游课程服务的数据完整性和隔离性",

// Experience bullets - SWE I
courseraSeIBullet1: "领导Scala到Java的服务迁移，通过迁移平台淘汰12个遗留API和约5K行代码",
courseraSeIBullet2: "构建处理约3K QPS的gRPC微服务，用于合同利用数据，测试覆盖率达98%",
courseraSeIBullet3: "创建了具有自动双读/写功能的可复用迁移库，被4个团队在15次迁移中采用",

// Experience bullets - Samsara
samsaraBullet1: "使用Go的扇入并发模式优化配置推送系统，通过内存队列的请求批处理将P95延迟降低90%",
```

- [ ] **Step 4: Update skills category keys (Chinese)**

Remove from `translations.zh`:
- `frameworks: "🏗️ 框架"`
- `tools: "🔧 工具"`
- `technologies: "⚡ 技术栈"`

Add to `translations.zh`:

```javascript
aiAndLlm: "🤖 AI & 大语言模型",
backendAndData: "🏗️ 后端与数据",
cloudAndInfra: "☁️ 云与基础设施",
```

Keep existing `languages: "💻 编程语言"` unchanged.

- [ ] **Step 5: Remove Entrepreneurship and unused Chinese keys**

Remove from `translations.zh`:
- `entrepreneurship`, `coFounderCTO`, `solemateDesc`
- `january2021March2021`, `march2020September2020`, `june2019September2019`, `july2018October2018`, `april2018June2018`, `january2017August2017`

- [ ] **Step 6: Verify no syntax errors**

Run: `npm start`
Expected: Dev server starts without JS compilation errors. **Note:** Raw key names will appear for removed keys — this is expected until Chunk 2.

- [ ] **Step 7: Commit**

```bash
git add src/contexts/LanguageContext.js
git commit -m "Update Chinese translations for AI repositioning

Mirror English changes: rewrite intro/background, add AI Projects
keys, replace experience descriptions with bullet keys, update
skills categories, remove dropped content."
```

---

## Chunk 2: React Components

> **Prerequisite:** Chunk 1 must be complete (all new translation keys present in `LanguageContext.js`).

### Task 3: Create AIProjects.js component

**Files:**
- Create: `src/components/AIProjects.js`

- [ ] **Step 1: Create the AIProjects component**

Create `src/components/AIProjects.js` with this content:

```javascript
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
```

- [ ] **Step 2: Verify file has no syntax errors**

The component is not wired into `App.js` until Task 6 so the dev server won't load it yet. Just verify the file was created at `src/components/AIProjects.js` and has no obvious syntax issues. Full rendering verification happens in Task 6 Step 3.

- [ ] **Step 3: Commit**

```bash
git add src/components/AIProjects.js
git commit -m "Add AIProjects component for AI Projects section

New component following Experience.js pattern: consumes LanguageContext
for all display text, renders project cards with bullet points,
tech tags, and company logos."
```

### Task 4: Update Experience.js — trim roles and switch to bullets

**Files:**
- Modify: `src/components/Experience.js`

- [ ] **Step 1: Replace the entire Experience.js file**

Replace the full content of `src/components/Experience.js` with the following (this is a complete file replacement, not a partial edit):

```javascript
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "seniorSoftwareEngineer",
      dateKey: "march2024Present",
      locationKey: "mountainViewCA",
      bulletKeys: [
        "courseraSeniorBullet1",
        "courseraSeniorBullet2",
        "courseraSeniorBullet3",
        "courseraSeniorBullet4"
      ],
      technologies: ["Java", "gRPC", "AWS DynamoDB", "AWS Lambda", "Apache Airflow", "Terraform", "Retool", "AWS EKS", "AWS MSK", "Kafka", "PostgreSQL", "GraphQL"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineerII",
      dateKey: "march2023March2024",
      locationKey: "mountainViewCA",
      bulletKeys: [
        "courseraSeIIBullet1",
        "courseraSeIIBullet2",
        "courseraSeIIBullet3",
        "courseraSeIIBullet4"
      ],
      technologies: ["Java", "Spring Boot", "GraphQL", "Redis", "AWS Aurora"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineerI",
      dateKey: "january2022March2023",
      locationKey: "mountainViewCA",
      bulletKeys: [
        "courseraSeIBullet1",
        "courseraSeIBullet2",
        "courseraSeIBullet3"
      ],
      technologies: ["Java", "Scala", "gRPC", "GraphQL"]
    },
    {
      company: "Samsara",
      website: "https://www.samsara.com/",
      logo: "/src/assets/logos/samsara.png",
      titleKey: "softwareEngineeringIntern",
      dateKey: "june2021October2021",
      locationKey: "sanFranciscoCA",
      bulletKeys: [
        "samsaraBullet1"
      ],
      technologies: ["Go", "MongoDB", "PostgreSQL"]
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
              <span className="emoji-fallback" style={{display: 'none'}}>🏢</span>
              {' '}
              <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.company}</a>
            </h3>
            <span className="date">📅 {t(experience.dateKey)}</span>
            <span className="location">📍 {t(experience.locationKey)}</span>
          </div>
          <h4>👨‍💻 {t(experience.titleKey)}</h4>
          <ul className="job-description">
            {experience.bulletKeys.map((key, bulletIndex) => (
              <li key={bulletIndex}>{t(key)}</li>
            ))}
          </ul>
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
```

- [ ] **Step 2: Verify Experience renders with bullets**

Run: `npm start`
Expected: Experience section shows 4 roles with bullet points instead of paragraphs.

- [ ] **Step 3: Commit**

```bash
git add src/components/Experience.js
git commit -m "Trim Experience to 4 roles with bullet-point format

Keep: Coursera Senior/II/I + Samsara. Drop: Coursera intern, TA,
Roche, C2, UCSD Health. Switch from paragraph descriptions to
bullet-key arrays rendered as <ul>/<li>."
```

### Task 5: Update Skills.js — new categories

**Files:**
- Modify: `src/components/Skills.js`

- [ ] **Step 1: Replace Skills.js skill categories**

Replace the `skillCategories` array in `src/components/Skills.js`:

```javascript
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
```

- [ ] **Step 2: Verify Skills renders with new categories**

Run: `npm start`
Expected: Skills section shows 4 new categories with AI & LLM first.

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills.js
git commit -m "Reorganize Skills with AI & LLM category first

Replace generic Languages/Frameworks/Tools/Technologies with
AI & LLM, Languages, Backend & Data, Cloud & Infrastructure.
Drop dated tools and frontend frameworks."
```

### Task 6: Update App.js — add AIProjects, remove Entrepreneurship

**Files:**
- Modify: `src/App.js`

- [ ] **Step 1: Update App.js imports and component tree**

Replace the full content of `src/App.js`:

```javascript
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Background from './components/Background';
import AIProjects from './components/AIProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.body.classList.remove('dark-theme');
    } else {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <LanguageProvider>
      <div className="container">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Background />
        <AIProjects />
        <Experience />
        <Education />
        <Skills />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
```

- [ ] **Step 2: Delete Entrepreneurship.js**

Delete: `src/components/Entrepreneurship.js`

- [ ] **Step 3: Verify full site renders correctly**

Run: `npm start`
Expected: Site shows Header → Background → AI Projects → Experience → Education → Skills → Footer. No console errors. Both themes and both languages work.

- [ ] **Step 4: Commit**

```bash
git add src/App.js
git rm src/components/Entrepreneurship.js
git commit -m "Wire up AIProjects section and remove Entrepreneurship

Add AIProjects between Background and Experience. Remove
Entrepreneurship import and component. Delete Entrepreneurship.js."
```

---

## Chunk 3: LaTeX PDF, README, and Verification

### Task 7: Update LaTeX PDF

**Files:**
- Modify: `public/patrick_resume.tex`

- [ ] **Step 1: Replace patrick_resume.tex content**

Replace the entire document body (everything between `\begin{document}` and `\end{document}`) in `public/patrick_resume.tex`:

```latex
\begin{document}

%----------HEADING-----------------
\begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
  \textbf{\Large Patrick Pei} & Email: \href{mailto:yingjianpei2022@u.northwestern.edu}{yingjianpei2022@u.northwestern.edu}\\
  \href{https://github.com/peiyj}{github.com/peiyj} & Mobile: \href{tel:+18586665517}{+1-858-666-5517} \\
  \href{https://linkedin.com/in/patrickpei11}{linkedin.com/in/patrickpei11} & \\
\end{tabular*}

\vspace{4pt}
\small{Senior Software Engineer building AI-powered products and scalable distributed systems at Coursera. Specializing in LLM application development, prompt engineering, and enterprise-scale AI integration.}

%-----------AI PROJECTS-----------------
\section{AI Projects}

  \resumeSubheading
    {AI-Powered Curation Builder Platform}{Coursera}
    {Lead Engineer}{2024 -- Present}
    \resumeItemListStart
      \resumeItem{Prompt Architecture}
        {Architected a template-based prompt system with 6+ specialized prompt executors for program outlines, domain queries, content suggestions, and collection filtering using OpenAI GPT-4.1.}
      \resumeItem{Multimodal Processing}
        {Implemented multimodal document processing --- PDF/DOCX uploads converted to images via PDFBox/POI for vision-capable LLM prompts with signed S3 URLs.}
      \resumeItem{Production LLM Integration}
        {Built structured JSON output parsing with retry logic and fault tolerance for reliable LLM response handling. Migrated from Azure OpenAI to native OpenAI client with Spring Retry-based resilience patterns.}
      \resumeItem{AI Content Pipeline}
        {Designed AI-ranked content suggestion pipeline integrating product search APIs with LLM-based relevance filtering for enterprise learning program curation.}
    \resumeItemListEnd

  \resumeSubheading
    {AI Developer Tooling \& Workflows}{Personal}
    {Builder}{2024 -- Present}
    \resumeItemListStart
      \resumeItem{MCP Integration}
        {Integrate and configure MCP (Model Context Protocol) servers for connecting AI assistants to external tools, APIs, and data sources.}
      \resumeItem{Agent Frameworks}
        {Design reusable agent skills and prompt frameworks for structured AI-assisted development workflows including brainstorming, debugging, code review, and TDD.}
      \resumeItem{AI-Assisted Development}
        {Leverage AI coding agents daily for full-cycle software development --- from architecture design through implementation and testing.}
    \resumeItemListEnd

%-----------EXPERIENCE-----------------
\section{Experience}

  \resumeSubheading
    {Coursera}{Mountain View, CA}
    {Senior Software Engineer}{Mar 2024 -- Present}
    \resumeItemListStart
      \resumeItem{Technical Leadership}
        {Lead a team of 3--4 engineers designing and shipping enterprise-scale platforms for contract management and badge issuance across Coursera's B2B product line.}
      \resumeItem{Badge Management Platform}
        {Architected a stream-processing system for real-time badge issuance serving all enterprise organizations, contributing to over \$10M in contract ACVs.}
      \resumeItem{Allowlist Management Platform (P0)}
        {Led P0 project with 4 engineers, reducing contract-level course update time from 2 weeks to under 10 seconds through near real-time data pipelines.}
      \resumeItem{Internal Tooling}
        {Built conflict detection workflows with Apache Airflow; launched Retool-based internal platform cutting engineering ops time from 95 minutes to under 5 seconds.}
    \resumeItemListEnd

  \resumeSubSubheading
    {Software Engineer II}{Mar 2023 -- Mar 2024}
    \resumeItemListStart
      \resumeItem{Clips Management Platform}
        {Led team of 3 engineers architecting fault-tolerant distributed system for clips metadata management. Enabled parallel processing reducing update time by 80\%.}
      \resumeItem{Performance Engineering}
        {Implemented distributed Redis cache reducing P95/P99 read latency by 80\%/92\%. Designed application-level transactions ensuring data integrity for downstream services.}
    \resumeItemListEnd

  \resumeSubSubheading
    {Software Engineer I}{Jan 2022 -- Mar 2023}
    \resumeItemListStart
      \resumeItem{Migration Platform}
        {Led Scala-to-Java service migrations, deprecating 12 legacy APIs and \textasciitilde5K lines of code. Built gRPC microservices handling \textasciitilde3K QPS with 98\% test coverage.}
      \resumeItem{Reusable Migration Library}
        {Created migration library with automated dual read/write, adopted by 4 teams across 15 migrations.}
    \resumeItemListEnd

  \vspace{4pt}
  \resumeSubheading
    {Samsara}{San Francisco, CA}
    {Software Engineering Intern}{Jun 2021 -- Oct 2021}
    \resumeItemListStart
      \resumeItem{Config Pusher Optimization}
        {Optimized Config Pusher System using Go's fan-in concurrency pattern, reducing P95 latency by 90\% through request batching with in-memory queue.}
    \resumeItemListEnd

%-----------EDUCATION-----------------
\section{Education}
  \resumeSubheading
    {Northwestern University}{Evanston, IL}
    {Master of Science in Computer Engineering, GPA: 4.0/4.0}{Sep 2020 -- Dec 2021}
  \vspace{4pt}
  \resumeSubheading
    {University of California, San Diego}{La Jolla, CA}
    {Bachelor of Science in Computer Engineering, GPA: 3.7/4.0}{Sep 2016 -- Jun 2020}

%--------SKILLS------------
\section{Technical Skills}
  \begin{itemize}[leftmargin=*, itemsep=1pt, parsep=0pt, topsep=0pt]
    \item \textbf{AI \& LLM:} OpenAI API, GPT-4.1, Prompt Engineering, Structured Output Parsing, Multimodal AI, MCP (Model Context Protocol), AI Agent Frameworks
    \item \textbf{Languages:} Java, Python, Go, JavaScript, TypeScript, SQL, C++
    \item \textbf{Backend \& Data:} Spring Boot, gRPC, GraphQL, Kafka, Redis, PostgreSQL, DynamoDB, MySQL, MongoDB, Airflow, Elasticsearch
    \item \textbf{Cloud \& Infrastructure:} AWS (EKS, Lambda, MSK, DynamoDB, S3, Aurora), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins
  \end{itemize}

%-------------------------------------------
\end{document}
```

- [ ] **Step 2: Compile LaTeX PDF (if pdflatex is available)**

```bash
cd /Users/ppei/Desktop/resume/public && pdflatex patrick_resume.tex
```

Expected: PDF compiles without errors. If `pdflatex` is not installed, note this as a known gap — the `.tex` source is the primary deliverable, but the PDF should be regenerated before deploying. Check `patrick_resume.pdf` was updated if compilation succeeded.

- [ ] **Step 3: Commit**

```bash
git add public/patrick_resume.tex
git commit -m "Update LaTeX PDF with AI repositioning

Add professional summary, AI Projects section, trim to 4 roles,
reorganize skills with AI & LLM first. Move Education below
Experience. Mirror all React site content changes."
```

### Task 8: Update README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update project structure and content sections in README**

In `README.md`, update the project structure tree to replace `Entrepreneurship.js` with `AIProjects.js`:

Replace:
```
│   │   ├── Entrepreneurship.js # Startup experience  
```
With:
```
│   │   ├── AIProjects.js       # AI projects showcase
```

Update the "Professional Experience Summary" section:

Replace the section starting with `## 📊 Professional Experience Summary` through `- **Databases**: PostgreSQL, Redis, MongoDB, Elasticsearch` with:

```markdown
## 📊 Professional Experience Summary

### AI-Focused Senior Engineer
- **Coursera**: Senior SWE → SWE II → SWE I (Mountain View, CA)
- **Samsara**: IoT fleet management (San Francisco, CA)

### Technical Expertise
- **AI & LLM**: OpenAI API, GPT-4.1, Prompt Engineering, MCP, AI Agent Frameworks
- **Languages**: Java, Python, Go, JavaScript, TypeScript, C++
- **Backend**: Spring Boot, gRPC, GraphQL, Kafka, Redis, PostgreSQL, DynamoDB
- **Cloud**: AWS, Docker, Kubernetes, Terraform
```

Update the "Content Customization" section — replace `Entrepreneurship.js` reference:

Replace:
```
- **Experience**: `src/components/Experience.js`
```
With:
```
- **AI Projects**: `src/components/AIProjects.js`
- **Experience**: `src/components/Experience.js`
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "Update README to reflect AI repositioning changes

Replace Entrepreneurship with AIProjects in structure tree and
content sections. Update technical expertise summary."
```

### Task 9: Cleanup and verification

**Files:** None new — verification only.

- [ ] **Step 1: Search for orphan references**

```bash
cd /Users/ppei/Desktop/resume && rg -i "entrepreneurship|solemate|solemateDesc|rocheDesc|c2GroupDesc|c2Group|ucsdHealthDesc|ucsdTaDesc|courseraInternDesc" src/ README.md public/ --glob '!build/' --glob '!node_modules/'
```

Expected: No matches. If any found, remove them.

- [ ] **Step 2: Verify dev server runs clean**

```bash
npm start
```

Expected: No errors, no warnings about missing imports or translation keys.

- [ ] **Step 3: Verify production build**

```bash
npm run build
```

Expected: Build succeeds without errors.

- [ ] **Step 4: Manual verification checklist**

In the browser at localhost:3000:
- [ ] Header shows "AI-powered products" in intro
- [ ] Background paragraphs mention LLM, prompt architectures
- [ ] AI Projects section appears between Background and Experience
- [ ] Curation Builder project shows with Coursera logo and 5 bullets
- [ ] AI Tooling project shows without logo and 3 bullets
- [ ] Experience shows 4 roles (Coursera ×3, Samsara) with bullet points
- [ ] No Entrepreneurship section visible
- [ ] Skills shows AI & LLM as first category
- [ ] Language toggle: all ZH translations render (no raw key names)
- [ ] Theme toggle: both light and dark modes look correct
- [ ] Education section unchanged

- [ ] **Step 5: Final commit (if any cleanup was needed)**

```bash
git add -A
git commit -m "Final cleanup after AI repositioning implementation"
```
