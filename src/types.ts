export interface Project {
  id: string;
  title: string;
  category: 'design' | 'marketing' | 'qa' | 'software' | 'python' | 'apis';
  description: string;
  longDescription: string;
  objective: string;
  process: string[];
  results: string;
  tags: string[];
  imageUrl: string;
  resultsMetrics?: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  language?: string;
  stars?: number;
  forks?: number;
  isFromGithub?: boolean;
  inPortfolio?: boolean; // Controls whether included in portfolio or removed
  updatedAt?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  default_branch: string;
  isIncluded?: boolean;
}

export interface GitHubUserProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  bio: string | null;
  updated_at: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Design' | 'Marketing' | 'QA' | 'Technical' | 'Soft';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  certificateTitle?: string;
  certificateImageUrl?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Certification {
  id?: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  credentialUrl?: string;
  certificateId?: string;
  batch?: string;
  imageUrl?: string;
  documentType?: 'internship_letter' | 'certificate';
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
