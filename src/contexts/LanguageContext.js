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
    
    courseraLeadDesc: "I led a team of 5 engineers to design and build an AI-powered content curation platform using OpenAI GPT-4.1 with multimodal prompt engineering, structured output parsing, and production-grade LLM service integration for enterprise learning program creation. Additionally, I led a P0 project with 4 engineers, designing and implementing an Allowlist Management Platform for managing near real-time data updating of courses and specializations at the contract-level, saving customer time from 2 weeks to under 10 seconds. I developed a RPC microservice with Java and gRPC supporting contract-level allowlist management. Furthermore, I implemented a conflict detection job using Apache Airflow that automatically resolves concurrent updates by the same user based on latest timestamp. Moreover, I launched an internal contract-scope allowlist management software using Retool, saving engineering time from 95 minutes to under 5 seconds. Currently, I lead a team of 3–4 engineers to design and develop a Badge Management Platform — a stream-processing platform for reliable real-time badge management service providing badge issuance workflow for learners across all organizations, leading to >$10M in contract ACVs.",
    
    courseraSeII: "I led a team of 3 engineers to design and develop a Clips Management Platform — a large scale, fault-tolerant, distributed system for clips metadata management service allowing creating, reading, updating, deleting clips metadata across the platform. To achieve scalability, I enabled parallel processing on concurrent, non-conflicting batch clip metadata updates and distributed workload to multiple threads, reducing average clips metadata update time by 80%. Additionally, I implemented distributed Redis Cache to reduce P95 and P99 latency of read operations by 80% and 92% respectively. Furthermore, I enforced data integrity, consistency and isolation for all clips metadata CRUD operations by implementing application level transactions, providing well-defined transaction boundaries for downstream curriculum updating services.",
    
    courseraSeI: "I led the Contract and User service migrations from Scala to Java through the Java Migration Platform, successfully phasing out 12 legacy APIs and deprecating ~5K lines of code. In this role, I developed a gRPC microservice with 12 APIs to fetch and update contract utilization and learning data, handling ~3K QPS with 98% test coverage. Moreover, I developed a gRPC microservice with 7 APIs to fetch and update learner profiles, handling ~200 QPS with 95% test coverage. Additionally, I implemented the Java migration library with automated double read/write functionality, which was subsequently used in 15 migrations among 4 internal teams.",
    
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
    
    courseraLeadDesc: "我领导了一个由5名工程师组成的团队，设计并构建了一个AI驱动的内容策展平台，使用OpenAI GPT-4.1进行多模态提示工程、结构化输出解析和生产级LLM服务集成，用于企业学习项目创建。此外，我领导了一个由4名工程师组成的P0项目，设计并实施了一个允许列表管理平台，用于在合同级别管理课程和专业的近实时数据更新，将客户时间从2周缩短到10秒以内。我开发了一个使用Java和gRPC的RPC微服务，支持合同级别的允许列表管理。进一步地，我实施了一个使用Apache Airflow的冲突检测作业，根据最新时间戳自动解决同一用户的并发更新。此外，我推出了一个内部合同范围的允许列表管理软件，使用Retool，将工程时间从95分钟缩短到5秒以内。目前，我领导一个由3-4名工程师组成的团队，设计和开发徽章管理平台——一个可靠的实时徽章管理服务的流处理平台，为所有组织的学习者提供徽章颁发工作流程，带来了超过1000万美元的合同年度合同价值。",
    
    courseraSeII: "我领导了一个由3名工程师组成的团队，设计和开发了剪辑管理平台——一个大规模、容错、分布式系统，用于剪辑元数据管理服务，允许在平台上创建、读取、更新、删除剪辑元数据。为了实现可扩展性，我启用了对并发、非冲突批量剪辑元数据更新的并行处理，并将工作负载分配给多个线程，将平均剪辑元数据更新时间减少了80%。此外，我实施了分布式Redis缓存，将读取操作的P95和P99延迟分别减少了80%和92%。进一步地，我通过实施应用程序级事务来强制所有剪辑元数据CRUD操作的数据完整性、一致性和隔离性，为下游课程更新服务提供了明确定义的事务边界。",
    
    courseraSeI: "我领导了通过Java迁移平台从Scala到Java的合同和用户服务迁移，成功淘汰了12个遗留API并弃用了约5K行代码。在这个角色中，我开发了一个具有12个API的gRPC微服务，用于获取和更新合同利用率和学习数据，处理约3K QPS，测试覆盖率达到98%。此外，我开发了一个具有7个API的gRPC微服务，用于获取和更新学习者档案，处理约200 QPS，测试覆盖率达到95%。另外，我实施了具有自动双读/写功能的Java迁移库，该库随后在4个内部团队的15次迁移中使用。",
    
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
