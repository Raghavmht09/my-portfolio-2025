export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'technical' | 'product' | 'domain';
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  category: 'award' | 'certification' | 'project';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}