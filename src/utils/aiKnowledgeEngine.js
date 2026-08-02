/**
 * Knowledge Engine for "Ask Jeevan AI"
 * Contains curated context & intelligent intent matching for recruiters and visitors.
 */

export const QUICK_PROMPTS = [
  { label: "🐳 Docker & Microservices", query: "What experience does Jeevan have with Docker & Microservices?" },
  { label: "🏛 Noble's Bid Architecture", query: "Tell me about the Noble's Bid project architecture." },
  { label: "🤖 LangChain & Agentic AI", query: "How does Jeevan use LangChain and Agentic AI?" },
  { label: "💼 Role Availability", query: "Is Jeevan available for full-time roles or internships?" },
  { label: "🎓 Education & CGPA", query: "What is Jeevan's educational background and CGPA?" },
  { label: "⚡ Core Tech Stack", query: "What is Jeevan's core technical stack?" },
];

export const generateAIResponse = (userQuery) => {
  const q = userQuery.toLowerCase().trim();

  // 1. Docker, DevOps, Microservices, Jenkins, AWS
  if (
    q.includes("docker") ||
    q.includes("microservice") ||
    q.includes("jenkins") ||
    q.includes("devops") ||
    q.includes("aws") ||
    q.includes("cloud")
  ) {
    return {
      text: `**Jeevan's DevOps & Cloud Architecture Experience:**\n\n- **Docker & Containerization**: Experienced in containerizing full-stack MERN & Next.js microservices, writing multi-stage Dockerfiles, and managing container orchestration.\n- **Jenkins & CI/CD**: Builds automated CI/CD deployment pipelines with Jenkins, GitHub Actions, Vercel, and Render for zero-downtime releases.\n- **Cloud & Microservices**: Deploys scalable backend microservices on **AWS** and containerized environments with RESTful & GraphQL APIs.\n\n👉 You can check out Jeevan's experience timeline on the [Experience Page](/experience) or review his cloud repositories on the [Open Source Page](/open-source).`,
      link: "/experience",
      linkLabel: "View Experience & Systems →",
    };
  }

  // 2. Noble's Bid Architecture
  if (
    q.includes("noble") ||
    q.includes("auction") ||
    q.includes("bidding")
  ) {
    return {
      text: `**Noble's Bid — Real-Time Auction Platform Architecture:**\n\n- **Tech Stack**: MongoDB, Express.js, React.js, Node.js (MERN) + WebSockets / Socket.io.\n- **Real-Time Bidding Engine**: Architected low-latency WebSocket event streams for sub-50ms live bid updates across thousands of concurrent users.\n- **Security & Integrity**: Integrated JWT authentication, atomic MongoDB transaction locks to prevent double-bidding, and rate-limiting middleware.\n- **Impact**: Successfully handled 500+ active live auctions with zero race conditions.\n\n👉 See full details on the [Projects Page](/projects).`,
      link: "/projects",
      linkLabel: "Explore Noble's Bid →",
    };
  }

  // 3. Growwise / FinTech / Next.js / AI SaaS
  if (
    q.includes("growwise") ||
    q.includes("fintech") ||
    q.includes("market")
  ) {
    return {
      text: `**Growwise — FinTech AI Market Analytics SaaS:**\n\n- **Tech Stack**: Next.js 14 (App Router), TypeScript, OpenAI API, Inngest, Tailwind CSS.\n- **AI Integration**: Implemented OpenAI GPT-4 models for real-time market sentiment extraction, automated financial summaries, and stock predictions.\n- **Background Workflows**: Powered by Inngest serverless event queues for cron market scans and asynchronous data processing.\n\n👉 View live demo link on the [Projects Page](/projects).`,
      link: "/projects",
      linkLabel: "View Growwise Project →",
    };
  }

  // 4. LangChain, Agentic AI, AI Career Coach, OpenAI
  if (
    q.includes("langchain") ||
    q.includes("agent") ||
    q.includes("rag") ||
    q.includes("ai") ||
    q.includes("openai") ||
    q.includes("career coach")
  ) {
    return {
      text: `**Jeevan's AI & LLM Systems Expertise:**\n\n- **LangChain & RAG**: Builds retrieval-augmented generation pipelines connecting vector databases with LLMs for accurate context-aware responses.\n- **Agentic AI Architecture**: Designs multi-agent workflows that plan, tool-call, self-correct, and execute complex developer tasks.\n- **AI Career Coach**: Built an AI engine that scans resumes, computes ATS match accuracy (94%+), and generates tailored career roadmaps.\n\n👉 Discover Jeevan's AI skills on the [Skills Page](/skills).`,
      link: "/skills",
      linkLabel: "Explore AI Skills →",
    };
  }

  // 5. Availability, Full-time, Internship, Hiring, Contact, Resume
  if (
    q.includes("available") ||
    q.includes("hire") ||
    q.includes("internship") ||
    q.includes("full-time") ||
    q.includes("job") ||
    q.includes("work") ||
    q.includes("contact") ||
    q.includes("resume")
  ) {
    return {
      text: `**Availability & Opportunities:**\n\n- **Status**: 🟢 **Actively Available** for Full-Stack Software Engineer roles, AI Developer positions, and high-impact engineering internships.\n- **Location**: Based in **Ahmedabad, Gujarat, India** (Open to Remote, Hybrid, and Relocation).\n- **Email**: [jeevakadam2275@gmail.com](mailto:jeevakadam2275@gmail.com)\n- **GitHub**: [github.com/Jeevan-2275](https://github.com/Jeevan-2275)\n- **LinkedIn**: [linkedin.com/in/jeevan-kadam-730b87327](https://www.linkedin.com/in/jeevan-kadam-730b87327)\n\n👉 Reach out directly on the [Contact Page](/contact).`,
      link: "/contact",
      linkLabel: "Get in Touch with Jeevan →",
    };
  }

  // 6. Education, University, CGPA, Degree
  if (
    q.includes("education") ||
    q.includes("university") ||
    q.includes("cgpa") ||
    q.includes("rai") ||
    q.includes("degree") ||
    q.includes("college") ||
    q.includes("b.tech") ||
    q.includes("marks")
  ) {
    return {
      text: `**Educational Qualification:**\n\n- 🎓 **B.Tech in Computer Engineering**\n  *Rai University, Ahmedabad* (2024 – 2028)\n  - **Current CGPA**: **8.70 / 10.0**\n- 🏫 **Higher Secondary Education (12th Science)**\n  - Passed with **70%** (2024)\n- 🏫 **Secondary School Certificate (10th SSC)**\n  - Passed with **82%** (2022)\n\n👉 Read complete education milestones on the [Education Page](/education).`,
      link: "/education",
      linkLabel: "View Education Details →",
    };
  }

  // 7. Tech Stack, Skills, Languages (Angular, React, Django, Node, etc.)
  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("angular") ||
    q.includes("react") ||
    q.includes("django") ||
    q.includes("python") ||
    q.includes("node") ||
    q.includes("javascript") ||
    q.includes("typescript") ||
    q.includes("frontend") ||
    q.includes("backend")
  ) {
    return {
      text: `**Jeevan's Technical Capabilities (35+ Technologies):**\n\n- 💻 **Languages**: JavaScript (ES6+), TypeScript, Python, C/C++, HTML5, CSS3\n- ⚛️ **Frontend**: React.js, Next.js 14, Angular, React Native / Expo, Tailwind CSS, Material UI, Redux Toolkit\n- ⚙️ **Backend & DB**: Node.js, Express.js, Django, MongoDB, PostgreSQL, MySQL, Redis, Firebase\n- 🤖 **AI & Systems**: OpenAI API, LangChain, RAG Pipelines, REST & GraphQL APIs, JWT Auth\n- 🛠 **DevOps**: Docker, Jenkins, Git/GitHub, Postman, Vercel, AWS\n\n👉 See full visual grid on the [Skills Page](/skills).`,
      link: "/skills",
      linkLabel: "View Complete Skill Matrix →",
    };
  }

  // 8. Default fallback
  return {
    text: `Thanks for asking! I'm Jeevan's AI Assistant. ⚡\n\nJeevan Kadam is a **Full-Stack Engineer & AI Specialist** studying B.Tech Computer Engineering at Rai University (8.70 CGPA).\n\nHe specializes in **React/Next.js, Angular, Node.js, Django, Docker, Jenkins, OpenAI API, and LangChain**.\n\nFeel free to select one of the quick prompts above or ask me about:\n- 🐳 Docker & Microservices experience\n- 🏛 Noble's Bid project architecture\n- 💼 Job availability & contact info\n- 🎓 Education & achievements`,
    link: "/about-us",
    linkLabel: "Learn More About Jeevan →",
  };
};
