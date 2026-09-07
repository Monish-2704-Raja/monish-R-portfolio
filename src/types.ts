export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  architecture: {
    overview: string;
    nodes: Array<{ name: string; type: string; description: string }>;
  };
  technologies: string[];
  challenges: string[];
  solutions: string[];
  impactMetrics: Array<{ label: string; value: string }>;
  demoSimulationType?: 'productivity' | 'traffic';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  description: string;
  dateAcquired: string;
  skillsCovered: string[];
  credentialStatus: 'Verified' | 'Active';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    level: number; // 0 to 100
    category: 'ai' | 'language' | 'tool';
    tag: string;
  }>;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedAction?: string;
}

export interface AnalysisResult {
  matchScore: number;
  roleCategory: string;
  keyMatchingSkills: string[];
  monishAdvantages: string[];
  recommendations: string[];
  summary: string;
}
