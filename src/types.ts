export interface Project {
  id: string;
  title: string;
  category: 'design' | 'marketing' | 'qa' | 'software';
  description: string;
  longDescription: string;
  objective: string;
  process: string[];
  results: string;
  tags: string[];
  imageUrl: string;
  resultsMetrics?: string[];
  features?: string[];
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
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown or simple HTML formatted content
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
