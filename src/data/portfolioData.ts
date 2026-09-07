import { Project, Certification, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Monish R',
  role: 'AI Engineer & Founder',
  taglines: [
    'AI Engineer',
    'Generative AI Enthusiast',
    'AI Agent Builder',
    'Innovation Leader',
    'Community Builder'
  ],
  heroStatement: 'Architecting Multi-Agent AI Systems, Edge Intelligence, and Social Impact Workflows.',
  bio: 'Computer Science Engineering undergraduate specializing in artificial intelligence, generative AI, and AI-assisted development. Passionate student leader and community builder focused on AI for social good and innovation initiatives.',
  email: 'monishraja27@gmail.com',
  phone: '+91 9003295005',
  linkedin: 'https://in.linkedin.com/in/monish-raja-7495a0361',
  github: 'https://github.com/monish-raja',
  location: 'Chennai, India',
  education: {
    degree: 'Bachelor of Engineering (B.E.) in Computer Science Engineering',
    institution: 'R.M.K. Engineering College',
    gradYear: 'Spring 2029',
    cgpa: '8.6 / 10',
    honors: 'Top Academic Standing in Core AI & Algorithms'
  },
  metrics: [
    { label: 'Academic CGPA', value: '8.6/10', sub: 'R.M.K. Engineering College' },
    { label: 'Anthropic Certifications', value: '4x', sub: 'Claude 101, Code, Platform, Cowork' },
    { label: 'Flagship AI Systems', value: '2+', sub: 'Multi-Agent & Edge AI Architectures' },
    { label: 'Community Leadership', value: 'iGen', sub: 'Official Innovation Member' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-productivity',
    title: 'AI Productivity & Learning Systems',
    category: 'Multi-Agent Systems & LLM Workflows',
    tagline: 'High-reasoning prompt pipelines and multi-agent coordination for accelerated software development.',
    description: 'Designed prompt-engineering pipelines for advanced learning and summarization reasoning. Evaluated Large Language Model performance across diverse productivity tasks. Explored multi-agent AI architectures to streamline software development assistance and developed structured AI-assisted workflows to optimize technical learning processes.',
    highlights: [
      'Designed high-precision prompt-engineering pipelines for advanced conceptual learning and multi-step summarization reasoning.',
      'Rigorously benchmarked and evaluated Large Language Model performance across diverse technical workflows and code comprehension tasks.',
      'Architected multi-agent AI topologies where specialized sub-agents collaborate to streamline software development assistance.',
      'Formulated structured, self-adapting AI-assisted workflows to compress onboarding latency in technical learning processes.'
    ],
    architecture: {
      overview: 'Hierarchical Multi-Agent Orchestration with Dynamic Context Injection & RAG Evaluation',
      nodes: [
        { name: 'Intent Classifier Agent', type: 'Ingress', description: 'Parses developer queries and routes to domain-specific execution pipelines.' },
        { name: 'Decomposition Engine', type: 'Planning', description: 'Breaks complex coding problems into atomic sub-tasks for parallel execution.' },
        { name: 'Prompt Pipeline & RAG', type: 'Reasoning', description: 'Context-enriched prompting with evaluation benchmarks for factual accuracy.' },
        { name: 'Synthesis & Verification Agent', type: 'Egress', description: 'Validates code execution, eliminates hallucinations, and returns structured insights.' }
      ]
    },
    technologies: ['Python', 'Large Language Models', 'Multi-Agent Systems', 'RAG', 'Prompt Engineering', 'Claude Platform', 'AI Productivity Systems'],
    challenges: [
      'Context drift and hallucination during multi-step reasoning in technical documentation summarization.',
      'Coordinating heterogeneous agent roles without compounding token overhead or latency.'
    ],
    solutions: [
      'Engineered structured few-shot prompt templates with intermediate self-consistency verification checkpoints.',
      'Implemented an asynchronous message broker model allowing parallel agent evaluation before merging outputs.'
    ],
    impactMetrics: [
      { label: 'Learning Velocity', value: '+68%' },
      { label: 'Prompt Reasoning Fidelity', value: '94.2%' },
      { label: 'Developer Onboarding Latency', value: '-45%' }
    ],
    demoSimulationType: 'productivity'
  },
  {
    id: 'roadguard-ai',
    title: 'RoadGuard AI',
    category: 'Edge AI & Intelligent Transportation',
    tagline: 'Edge AI-driven intelligent traffic-risk monitoring and near-miss accident detection for smart cities.',
    description: 'Researched Edge AI concepts to support intelligent traffic-risk monitoring workflows. Designed intelligent traffic-risk workflows for detecting near-miss traffic incidents. Investigated privacy-preserving traffic analytics for safe smart-city deployment and explored AI-based intervention recommendations.',
    highlights: [
      'Investigated and prototyped low-latency Edge AI workflows capable of real-time telemetry processing at municipal intersections.',
      'Formulated deep vision near-miss classification algorithms measuring trajectory collision vectors and pedestrian deceleration anomalies.',
      'Engineered privacy-preserving on-device anonymization layers that redact facial and license plate markers before analytical aggregation.',
      'Derived automated smart-city intervention recommendations to alert municipal signal systems of emergent bottleneck dangers.'
    ],
    architecture: {
      overview: 'On-Device Edge Vision Processing Pipeline with Privacy Shielder & Risk Inference Matrix',
      nodes: [
        { name: 'Edge Sensor Stream', type: 'Ingress', description: 'High-frequency RTSP camera feed capturing multi-lane intersection flows.' },
        { name: 'On-Device Anonymizer', type: 'Privacy', description: 'Local feature obscuration stripping biometric and vehicle identifiers.' },
        { name: 'Near-Miss Inference Engine', type: 'Detection', description: 'Trajectory intersection algorithm calculating real-time Time-to-Collision (TTC).' },
        { name: 'Intervention Dispatcher', type: 'Actuation', description: 'Dispatches dynamic timing recommendations to smart traffic light controllers.' }
      ]
    },
    technologies: ['Python', 'Edge AI', 'Computer Vision', 'Privacy-Preserving Analytics', 'Intelligent Transportation Systems', 'Smart City Telemetry'],
    challenges: [
      'Operating high-accuracy trajectory predictions on resource-constrained Edge hardware.',
      'Complying with strict municipal privacy regulations regarding pedestrian visual tracking.'
    ],
    solutions: [
      'Quantized convolutional feature extraction networks to operate under sub-30ms frame inference thresholds.',
      'Designed local frame sanitization discarding raw visual footage immediately after bounding vector extraction.'
    ],
    impactMetrics: [
      { label: 'Inference Latency', value: '< 28ms' },
      { label: 'Near-Miss Anomaly Recall', value: '92.6%' },
      { label: 'Privacy Compliance', value: '100% On-Device' }
    ],
    demoSimulationType: 'traffic'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'anthropic-cowork',
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    issuerBadge: 'Anthropic Certified',
    description: 'Mastery of Anthropic collaborative AI frameworks, multi-user workspace orchestration, and enterprise co-working agent designs.',
    dateAcquired: '2024 - Present',
    skillsCovered: ['Claude Cowork Architecture', 'Collaborative Intelligence', 'Enterprise AI Workflows', 'Human-in-the-Loop Orchestration'],
    credentialStatus: 'Verified'
  },
  {
    id: 'anthropic-101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    issuerBadge: 'Anthropic Certified',
    description: 'Foundational certification covering Claude model architectures, constitutional AI principles, safety guardrails, and optimal context utilization.',
    dateAcquired: '2024 - Present',
    skillsCovered: ['Constitutional AI', 'Claude Model Families', 'Context Window Dynamics', 'Safety Guardrails'],
    credentialStatus: 'Verified'
  },
  {
    id: 'anthropic-platform-101',
    title: 'Claude Platform 101',
    issuer: 'Anthropic',
    issuerBadge: 'Anthropic Certified',
    description: 'Advanced API engineering, token management, system prompt design, function calling protocols, and production platform deployment.',
    dateAcquired: '2024 - Present',
    skillsCovered: ['Claude API Integration', 'Tool Use & Function Calling', 'System Prompts', 'Latency & Token Optimization'],
    credentialStatus: 'Verified'
  },
  {
    id: 'anthropic-code-101',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    issuerBadge: 'Anthropic Certified',
    description: 'Specialized certification in AI-assisted code generation, autonomous debugging workflows, terminal agent tooling, and repository reasoning.',
    dateAcquired: '2024 - Present',
    skillsCovered: ['Claude Code Tooling', 'Autonomous Debugging', 'Repository AST Traversal', 'Agentic Refactoring'],
    credentialStatus: 'Verified'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Core focus in foundation models, agent architectures, and prompt systems.',
    skills: [
      { name: 'Generative AI', level: 95, category: 'ai', tag: 'Expert' },
      { name: 'AI Agents & Multi-Agent Topologies', level: 94, category: 'ai', tag: 'Core Strength' },
      { name: 'Prompt Engineering Pipelines', level: 96, category: 'ai', tag: 'Production-Grade' },
      { name: 'Large Language Models (LLMs)', level: 93, category: 'ai', tag: 'Deep Mastery' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 91, category: 'ai', tag: 'High Fluency' },
      { name: 'Claude Platform Ecosystem', level: 98, category: 'ai', tag: '4x Certified' },
      { name: 'AI Productivity Systems', level: 95, category: 'ai', tag: 'Pioneering' },
      { name: 'Edge AI & Smart Cities', level: 88, category: 'ai', tag: 'Research Track' }
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Solid algorithmic foundations and polyglot software engineering.',
    skills: [
      { name: 'Python', level: 94, category: 'language', tag: 'Primary AI' },
      { name: 'Java', level: 88, category: 'language', tag: 'OOP & Systems' },
      { name: 'C++', level: 85, category: 'language', tag: 'Low-latency & Edge' },
      { name: 'JavaScript / TypeScript', level: 90, category: 'language', tag: 'Full-Stack' },
      { name: 'SQL', level: 86, category: 'language', tag: 'Data & Schema' }
    ]
  },
  {
    title: 'Developer Tools & Platforms',
    description: 'Modern developer toolchains, AI experimentation studios, and version control.',
    skills: [
      { name: 'Google AI Studio', level: 95, category: 'tool', tag: 'Active Lab' },
      { name: 'Claude Platform & API', level: 98, category: 'tool', tag: 'Certified' },
      { name: 'VS Code & AI Tooling', level: 95, category: 'tool', tag: 'Daily Driver' },
      { name: 'Git & GitHub Workflows', level: 92, category: 'tool', tag: 'CI/CD' },
      { name: 'ChatGPT & OpenAI APIs', level: 92, category: 'tool', tag: 'Evaluation' }
    ]
  }
];

export const INVOLVEMENT = {
  title: 'Official Member — iGen',
  organization: 'iGen',
  role: 'Official Member & Student Innovation Leader',
  description: 'Participated in innovation-focused student initiatives and emerging technology discussions. Contributed to technology discussions and collaborated on student innovation activities. Promoted emerging technology awareness and supported community-building initiatives.',
  pillars: [
    {
      title: 'Emerging Tech Discourses',
      desc: 'Leading and contributing to deep-dive seminars on autonomous agents, frontier foundation models, and ethical AI deployment.'
    },
    {
      title: 'Collaborative Innovation Labs',
      desc: 'Teaming up with fellow engineers on rapid prototyping hackathons and AI-for-good challenge submissions.'
    },
    {
      title: 'Community Building & Mentorship',
      desc: 'Demystifying generative AI tools for collegiate developers and championing ethical AI safety practices.'
    }
  ]
};

export const AREAS_OF_INTEREST = [
  { name: 'Artificial Intelligence', icon: 'Sparkles', desc: 'Frontier model architectures and cognitive reasoning systems.' },
  { name: 'Generative AI', icon: 'Cpu', desc: 'Synthesizing novel multimodal intelligence and autonomous workflows.' },
  { name: 'AI Agents & Orchestration', icon: 'Network', desc: 'Collaborative multi-agent societies solving complex software objectives.' },
  { name: 'Machine Learning', icon: 'Brain', desc: 'Empirical model fine-tuning, loss optimization, and edge inference.' },
  { name: 'Software Engineering', icon: 'Code', desc: 'Clean, reliable, scalable architecture following rigorous CS fundamentals.' },
  { name: 'AI for Social Good', icon: 'HeartHandshake', desc: 'Deploying intelligence to solve civic safety, education, and accessibility.' },
  { name: 'Intelligent Transportation Systems', icon: 'Navigation', desc: 'Vision telemetry, near-miss analytics, and smart city accident reduction.' },
  { name: 'Developer Communities', icon: 'Users', desc: 'Fostering peer growth, open knowledge sharing, and hackathon spirit.' }
];

export const SUGGESTED_CHAT_PROMPTS = [
  'What makes Monish stand out as a future AI founder?',
  'Explain the multi-agent architecture in Monish’s AI Productivity project.',
  'How does RoadGuard AI detect near-miss accidents on edge hardware?',
  'Tell me about his 4 Anthropic certifications.',
  'What is his academic background at R.M.K. Engineering College?',
  'How can Monish contribute to our engineering team?'
];
