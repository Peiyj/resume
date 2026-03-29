# Resume AI Repositioning — Design Spec

**Date:** 2026-03-29
**Goal:** Reposition Patrick Pei's resume from "backend/distributed systems engineer" to "senior engineer building AI-powered products" for LLM/AI Application Engineer roles.
**Scope:** Both the React web resume (ppei.dev) and the LaTeX PDF.

---

## Target Role

**LLM / AI Application Engineer** — building products on top of foundation models (RAG, agents, prompt engineering, tool-use systems). The resume should signal hands-on LLM production experience, strong systems engineering, and AI ecosystem fluency.

## Approach: AI-First Restructure

Restructure the site and PDF into a new section order with AI-first positioning, a dedicated AI Projects section, trimmed experience, and reorganized skills.

---

## Section Order (Before → After)

### Current
1. Header — "senior software engineer... distributed systems"
2. Background — generic "full stack", "large corporations and internships"
3. Experience — 9 roles (Coursera ×4, Samsara, TA, Roche, C2, UCSD Health)
4. Entrepreneurship — Solemate iOS App
5. Education — Northwestern, UCSD
6. Skills — Languages, Frameworks, Tools, Technologies

### Proposed
1. Header — rewritten with AI positioning
2. Background — AI narrative, LLM expertise arc
3. **AI Projects (NEW)** — Curation Builder + AI Dev Tooling
4. Experience — trimmed to 4 roles
5. Education — unchanged
6. Skills — reorganized with AI-first categories

### Removed Sections
- **Entrepreneurship** — Solemate doesn't support the AI narrative

---

## Section 1: Header & Background

### Header Intro

**Current:**
> "I'm Patrick Pei, a senior software engineer with a passion for building distributed systems & creating impactful solutions"

**Proposed:**
> "I'm Patrick Pei, a senior software engineer building AI-powered products and scalable distributed systems at Coursera"

### Background

**Current paragraphs:**
1. "I'm a Senior Software Engineer working at Coursera... love for all aspects of technology and applied problem solving..."
2. "As a full stack software engineer... large corporations and various internships."
3. "When I'm not at my computer... golf, ping pong, at the gym, or exploring new technologies."

**Proposed paragraphs:**
1. "I'm a Senior Software Engineer at Coursera, where I build AI-powered applications using large language models and design distributed systems serving millions of learners. I hold an M.S. in Computer Engineering from Northwestern University (4.0 GPA)."
2. "I specialize in taking LLM capabilities from prototype to production — designing prompt architectures, building reliable AI service backends, and integrating generative AI into enterprise-scale platforms. I'm passionate about the intersection of AI applications and robust systems engineering."
3. "Outside of work, I'm an active builder in the AI developer tooling ecosystem and enjoy golf, ping pong, and staying active."

### Chinese Translations
Mirror the same structural changes. Updated translations needed for:
- `intro`
- `backgroundText1`, `backgroundText2`, `backgroundText3`

---

## Section 2: AI Projects (NEW)

New React component `AIProjects.js` placed between Background and Experience in `App.js`.

### Project 1: AI-Powered Curation Builder Platform
- **Context:** Coursera, 2024–Present
- **Tech:** Java, Spring Boot, OpenAI GPT-4.1, Prompt Engineering, Multimodal AI, GraphQL, gRPC, DynamoDB, AWS S3
- **Description:** Designed and built Coursera's AI-powered content curation platform that enables enterprise clients to build learning programs and collections using generative AI. The platform uses GPT-4.1 to generate program outlines, curate content recommendations, and filter relevant learning materials from Coursera's catalog.
- **Bullets:**
  - Architected a template-based prompt system with 6+ specialized prompt executors for program outlines, domain queries, content suggestions, and collection filtering
  - Implemented multimodal document processing — PDF/DOCX uploads converted to images via PDFBox/POI for vision-capable LLM prompts with signed S3 URLs
  - Built structured JSON output parsing with retry logic and fault tolerance for reliable LLM response handling in production
  - Designed AI-ranked content suggestion pipeline integrating product search APIs with LLM-based relevance filtering
  - Migrated from Azure OpenAI to native OpenAI client with Spring Retry-based resilience patterns for production-grade LLM service reliability

### Project 2: AI Developer Tooling & Workflows
- **Context:** Personal, 2024–Present
- **Tech:** MCP (Model Context Protocol), Agent Skills, Prompt Engineering, AI-Assisted Development
- **Description:** Build and maintain AI-augmented engineering workflows using cutting-edge developer tooling for daily software development productivity.
- **Bullets:**
  - Integrate and configure MCP (Model Context Protocol) servers for connecting AI assistants to external tools, APIs, and data sources
  - Design reusable agent skills and prompt frameworks for structured AI-assisted development workflows (brainstorming, debugging, code review, TDD)
  - Leverage AI coding agents daily for full-cycle software development — from architecture design through implementation and testing

### New Translation Keys Needed
- Section title: "AI Projects" / "AI 项目"
- All project descriptions and bullets (EN + ZH)
- New date keys if needed

---

## Section 3: Experience (Trimmed)

### Roles Kept (4)

**1. Coursera — Senior Software Engineer — Mar 2024–Present**
Technologies: Java, gRPC, AWS DynamoDB, AWS Lambda, Apache Airflow, Terraform, Retool, AWS EKS, AWS MSK, Kafka, PostgreSQL, GraphQL

Bullets:
- Lead a team of 3–4 engineers designing and shipping enterprise-scale platforms for contract management and badge issuance across Coursera's B2B product line
- Architected a Badge Management Platform — a stream-processing system for real-time badge issuance serving all enterprise organizations, contributing to >$10M in contract ACVs
- Led a P0 Allowlist Management Platform project, reducing contract-level course update time from 2 weeks to under 10 seconds through near real-time data pipelines
- Built conflict detection workflows with Apache Airflow for automatic resolution of concurrent updates; launched internal tooling with Retool cutting engineering ops time from 95 min to <5 sec

**2. Coursera — Software Engineer II — Mar 2023–Mar 2024**
Technologies: Java, Spring Boot, GraphQL, Redis, AWS Aurora

Bullets:
- Led a team of 3 engineers to design and ship a Clips Management Platform — a fault-tolerant distributed system for clips metadata CRUD across the platform
- Enabled parallel processing on concurrent batch updates, reducing average metadata update time by 80%
- Implemented distributed Redis cache reducing P95 and P99 read latency by 80% and 92% respectively
- Designed application-level transactions ensuring data integrity and isolation for downstream curriculum services

**3. Coursera — Software Engineer I — Jan 2022–Mar 2023**
Technologies: Java, Scala, gRPC, GraphQL

Bullets:
- Led Scala-to-Java service migrations, deprecating 12 legacy APIs and ~5K lines of code through a migration platform
- Built gRPC microservices handling ~3K QPS for contract utilization data with 98% test coverage
- Created a reusable migration library with automated double read/write, adopted by 4 teams across 15 migrations

**4. Samsara — Software Engineering Intern — Jun–Oct 2021**
Technologies: Go, MongoDB, PostgreSQL

Bullets:
- Optimized the Config Pusher System using Go's fan-in concurrency pattern, reducing P95 latency by 90% through request batching with an in-memory queue

### Roles Removed (5)
- Coursera Intern (Jan–Mar 2021) — redundant with full-time Coursera roles
- UC San Diego TA (Mar–Sep 2020) — irrelevant to AI/senior positioning
- Roche Intern (Jun–Sep 2019) — early career, no AI signal
- C2 Group Intern (Jul–Oct 2018) — early career, no AI signal
- UC San Diego Health Intern (Apr–Jun 2018) — early career, no AI signal

### Format Change
All descriptions change from paragraph format to bullet points.

---

## Section 4: Education

**No changes.** Keep Northwestern (M.S., 4.0 GPA) and UCSD (B.S., 3.7 GPA) as-is.

---

## Section 5: Skills (Reorganized)

### Current Categories
1. Languages: Python, Java, JavaScript, TypeScript, GoLang, C++, Swift, Objective C, SQL, HTML/CSS
2. Frameworks: React, Angular, Node.js, Ember.js, Chart.js, JavaFX, Spring Boot, Django, Flask, Express.js, Bootstrap, jQuery
3. Tools: Git, Docker, Kubernetes, AWS, Jenkins, GitHub Actions, MS TFS, Handlebars
4. Technologies: PostgreSQL, MySQL, Redis, Kafka, Elasticsearch, Spark, Hadoop, Airflow, MongoDB, Firebase, Firestore, ML Kit, Kubernetes

### Proposed Categories
1. **AI & LLM:** OpenAI API, GPT-4, Prompt Engineering, Structured Output Parsing, Multimodal AI, MCP (Model Context Protocol), AI Agent Frameworks, RAG Patterns
2. **Languages:** Java, Python, Go, JavaScript, TypeScript, SQL, C++
3. **Backend & Data:** Spring Boot, gRPC, GraphQL, Kafka, Redis, PostgreSQL, DynamoDB, MySQL, MongoDB, Airflow, Elasticsearch
4. **Cloud & Infrastructure:** AWS (EKS, Lambda, MSK, DynamoDB, S3, Aurora), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins

### Dropped Skills (with rationale)
- Swift, Objective-C — only used in removed Solemate project
- HTML/CSS, jQuery, Bootstrap, Ember.js, Chart.js, JavaFX, Handlebars — dated frontend; dilutes senior backend/AI positioning
- React, Angular, Node.js, Django, Flask, Express.js — not targeting frontend/full-stack roles
- MS TFS — legacy tool
- Firebase, Firestore, ML Kit — only used in removed Solemate project
- Spark, Hadoop — not referenced in any current role
- Git — assumed, not resume-worthy for senior roles

### New Translation Keys
- Category titles: "AI & LLM" / "AI & 大语言模型", "Backend & Data" / "后端与数据", "Cloud & Infrastructure" / "云与基础设施"

---

## Section 6: LaTeX PDF

Mirror all content changes from the React site into `public/patrick_resume.tex`:

1. **Add AI Projects section** above Experience with the same two projects
2. **Update experience** to match the 4-role trimmed version with bullet-point format
3. **Update skills** to the 4 new categories (AI & LLM first)
4. **Update header/summary** if the LaTeX has one (currently it does not have a summary section — consider adding a 1-line professional summary)
5. **Remove** any roles not in the trimmed list

---

## Implementation Scope

### React Site Changes
| File | Change |
|------|--------|
| `src/contexts/LanguageContext.js` | Update intro, background, experience descriptions (EN + ZH). Add AI Projects translations. Update skills category keys. Remove dropped role translations. |
| `src/components/AIProjects.js` | **New file.** AI Projects section component. |
| `src/components/Experience.js` | Remove 5 roles from the experiences array. Update technology tags for kept roles. |
| `src/components/Skills.js` | Replace 4 categories with new 4 categories. |
| `src/components/Background.js` | No structural change (content comes from LanguageContext). |
| `src/components/Header.js` | No structural change (content comes from LanguageContext). |
| `src/App.js` | Import AIProjects, add between Background and Experience. Remove Entrepreneurship import and usage. |
| `src/components/Entrepreneurship.js` | Can be deleted or left unused. |

### LaTeX Changes
| File | Change |
|------|--------|
| `public/patrick_resume.tex` | Add AI Projects section, update experience bullets, update skills categories, remove old roles. |

### No Changes Needed
- `src/components/Education.js` — unchanged
- `src/components/Footer.js` — unchanged
- `src/index.js`, `src/index.css` — unchanged (AI Projects component reuses existing CSS patterns)
- `worker.js`, `wrangler.toml` — deployment unchanged
