export interface Project {
  id: string;
  title: string;
  tagline: string;
  tier: 'tier1' | 'tier2' | 'tier3';
  displayCategory?: 'featured' | 'engineering' | 'supporting';
  team: string;
  category: string;
  description: string;
  coverImage?: string;
  gallery?: string[];
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: {
    label: string;
    value: string;
    color?: string;
  }[];
  architecture: {
    title: string;
    steps: string[];
  };
  caseStudy?: {
    problem: string;
    solution: string;
    challenges: string[];
    technicalDecisions: {
      decision: string;
      rationale: string;
    }[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  bullets: string[];
  technologies: string[];
  logo?: string;
}

export interface JourneyStage {
  id: string;
  stageNumber: string;
  title: string;
  period: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ArchitectureDecision {
  id: string;
  project: string;
  badge: string;
  title: string;
  problem: string;
  decision: string;
  impact: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  tag: string;
  bullets: string[];
}

export interface MetricProof {
  value: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  coursework?: string[];
  location: string;
}
