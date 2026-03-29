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
    entrepreneurship: "🚀 Entrepreneurship",
    
    // Background section
    backgroundText1: "I'm a **Senior Software Engineer** at **Coursera**, where I build **AI-powered applications** using **large language models** and design **distributed systems** serving millions of learners. I hold an M.S. in **Computer Engineering** from **Northwestern University** (4.0 GPA).",
    backgroundText2: "I specialize in taking **LLM capabilities from prototype to production** — designing prompt architectures, building reliable AI service backends, and integrating generative AI into enterprise-scale platforms. I'm passionate about the intersection of **AI applications** and **robust systems engineering**.",
    backgroundText3: "Outside of work, I'm an active builder in the **AI developer tooling** ecosystem and enjoy **golf**, **ping pong**, and **staying active**.",
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
    softwareEngineerIntern: "Software Engineer Intern",
    teachingAssistant: "Teaching Assistant",
    
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
    samsaraDesc: "I optimized the Config Pusher System (CPS) by developing patterns for batching requests, leveraging the fan-in pattern from Go routines. To achieve this, I designed a batch manager to consolidate requests using in-memory queue, ultimately reducing CPS service P95 latency by 90%. Furthermore, I built scalable microservices architecture using GoLang and integrated with MongoDB and PostgreSQL databases for high-performance data processing.",
    
    courseraInternDesc: "I supported the Roster Service Migration from Scala to Java, successfully phasing out 6 legacy APIs and deprecating ~1.1K lines of code. During this internship, I implemented 3 gRPC APIs for obtaining and updating learner rosters, handling ~200 QPS with 95% test coverage. Additionally, I contributed to the migration platform that enabled seamless transition between legacy and modern service architectures.",
    
    ucsdTaDesc: "I taught FPGA architecture and design flow concepts in SystemVerilog and C to an average of 20 students per day. In this role, I covered topics including FPGA components, synthesis, simulation, verification, timing analysis, and optimization. Moreover, I used Vsim tools to demonstrate design flow and create FPGA projects using SystemVerilog and C. Additionally, I held office hours to assist more than 50 students with their projects by analyzing and debugging code. Through this work, I helped students resolve issues including syntax errors, logic errors, timing violations, resource constraints, and memory leaks.",
    
    rocheDesc: "I developed bioinformatics tools for genomic data analysis, accelerating drug discovery research timelines by 40%. Furthermore, I created automated pipelines for processing large-scale sequencing data (10TB+), reducing manual analysis time from weeks to hours. Additionally, I built interactive visualization tools for research scientists that enabled faster identification of genetic variants and biomarkers. Moreover, I implemented cloud-based solutions using AWS that improved data accessibility and collaboration between research teams across multiple locations. Through this work, I contributed to the development of precision medicine algorithms that supported 5+ clinical trials.",
    
    c2GroupDesc: "I collaborated on enhancing underground vehicle sensor accuracy using C++, increasing precision from 70% to 90%. Additionally, I optimized image processing speed by 80% by using multithreading and the fan-out pattern in C++.",
    
    ucsdHealthDesc: "I developed and deployed a real-time data gathering application using .NET Framework, MongoDB, and REST API. Furthermore, I integrated the application with the hospital's network and sensors to collect and store over 10 GB of data per day in MongoDB. Through this work, I analyzed the data using machine learning algorithms, resulting in a 40% electricity reduction in UCSD hospitals. Moreover, I generated insights and recommendations for optimizing energy usage of light fixtures using Matplotlib, achieving a 40% reduction in electricity consumption.",
    
    // Entrepreneurship
    coFounderCTO: "Co-Founder & CTO",
    solemateDesc: "Developed the Solemate iOS App using Swift and Objective C for 1.8K daily active patients who have ankle injuries. Designed adaptive UI with CSS to display the rehabilitation data and send it to their doctors using Firestore and ML kit.",
    
    // Dates
    present: "Present",
    march2024Present: "March 2024 - Present",
    march2023March2024: "March 2023 - March 2024", 
    january2022March2023: "January 2022 - March 2023",
    june2021October2021: "June 2021 - October 2021",
    january2021March2021: "January 2021 - March 2021",
    march2020September2020: "March 2020 - September 2020",
    june2019September2019: "June 2019 - September 2019",
    july2018October2018: "July 2018 - October 2018",
    april2018June2018: "April 2018 - June 2018",
    september2020December2021: "September 2020 - December 2021",
    september2016June2020: "September 2016 - June 2020",
    january2017August2017: "January 2017 - August 2017",
    
    // Locations
    mountainViewCA: "Mountain View, CA",
    sanFranciscoCA: "San Francisco, CA",
    sanDiegoCA: "San Diego, CA",
    tucsonAZ: "Tucson, AZ",
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
    entrepreneurship: "🚀 创业经历",
    
    // Background section
    backgroundText1: "我是**Coursera**的**高级软件工程师**，负责使用**大语言模型**构建**AI驱动的应用程序**，并设计服务数百万学习者的**分布式系统**。我拥有**西北大学****计算机工程**硕士学位（GPA **4.0/4.0**）。",
    backgroundText2: "我专注于将**大语言模型能力从原型推向生产**——设计提示架构、构建可靠的AI服务后端，并将生成式AI集成到企业级平台中。我热衷于**AI应用**与**稳健系统工程**的交汇。",
    backgroundText3: "工作之余，我积极参与**AI开发者工具**生态系统建设，也喜欢打**高尔夫球**、**乒乓球**和**健身**。",
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
    softwareEngineerIntern: "软件工程实习生",
    teachingAssistant: "助教",
    
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
    samsaraDesc: "我通过开发批处理请求模式优化了配置推送系统(CPS)，利用Go例程的扇入模式。为了实现这一点，我设计了一个批处理管理器，使用内存队列整合请求，最终将CPS服务P95延迟减少了90%。进一步地，我使用GoLang构建了可扩展的微服务架构，并与MongoDB和PostgreSQL数据库集成，实现高性能数据处理。",
    
    courseraInternDesc: "我支持了从Scala到Java的名册服务迁移，成功淘汰了6个遗留API并弃用了约1.1K行代码。在这次实习期间，我实施了3个gRPC API，用于获取和更新学习者名册，处理约200 QPS，测试覆盖率达到95%。此外，我为迁移平台做出了贡献，使遗留和现代服务架构之间的无缝过渡成为可能。",
    
    ucsdTaDesc: "我使用SystemVerilog和C向平均每天20名学生教授FPGA架构和设计流程概念。在这个角色中，我涵盖了包括FPGA组件、综合、仿真、验证、时序分析和优化在内的主题。此外，我使用Vsim工具演示设计流程，并使用SystemVerilog和C创建FPGA项目。另外，我举办办公时间，通过分析和调试代码帮助50多名学生完成他们的项目。通过这项工作，我帮助学生解决了包括语法错误、逻辑错误、时序违规、资源约束和内存泄漏在内的问题。",
    
    rocheDesc: "我开发了用于基因组数据分析的生物信息学工具，将药物发现研究时间线加速了40%。进一步地，我创建了用于处理大规模测序数据(10TB+)的自动化管道，将人工分析时间从数周减少到数小时。此外，我为研究科学家构建了交互式可视化工具，使遗传变异和生物标志物的识别更快。此外，我使用AWS实施了基于云的解决方案，改善了跨多个地点的研究团队之间的数据可访问性和协作。通过这项工作，我为支持5+临床试验的精准医疗算法的开发做出了贡献。",
    
    c2GroupDesc: "我合作使用C++增强地下车辆传感器精度，将精度从70%提高到90%。此外，我通过使用多线程和C++中的扇出模式将图像处理速度优化了80%。",
    
    ucsdHealthDesc: "我使用.NET Framework、MongoDB和REST API开发并部署了一个实时数据收集应用程序。进一步地，我将应用程序与医院的网络和传感器集成，每天在MongoDB中收集和存储超过10 GB的数据。通过这项工作，我使用机器学习算法分析数据，使UCSD医院的电力减少了40%。此外，我使用Matplotlib生成了优化灯具能源使用的见解和建议，实现了40%的电力消耗减少。",
    
    // Entrepreneurship
    coFounderCTO: "联合创始人兼首席技术官",
    solemateDesc: "为1.8K名有踝关节损伤的日活跃患者开发了Solemate iOS应用程序，使用Swift和Objective C。设计了自适应UI，使用CSS显示康复数据，并使用Firestore和ML kit将其发送给医生。",
    
    // Dates
    present: "至今",
    march2024Present: "2024年3月 - 至今",
    march2023March2024: "2023年3月 - 2024年3月", 
    january2022March2023: "2022年1月 - 2023年3月",
    june2021October2021: "2021年6月 - 2021年10月",
    january2021March2021: "2021年1月 - 2021年3月",
    march2020September2020: "2020年3月 - 2020年9月",
    june2019September2019: "2019年6月 - 2019年9月",
    july2018October2018: "2018年7月 - 2018年10月",
    april2018June2018: "2018年4月 - 2018年6月",
    september2020December2021: "2020年9月 - 2021年12月",
    september2016June2020: "2016年9月 - 2020年6月",
    january2017August2017: "2017年1月 - 2017年8月",
    
    // Locations
    mountainViewCA: "加利福尼亚州山景城",
    sanFranciscoCA: "加利福尼亚州旧金山",
    sanDiegoCA: "加利福尼亚州圣地亚哥",
    tucsonAZ: "亚利桑那州图森",
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
