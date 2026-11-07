export interface Project {
  id: string;
  planetName: string;
  planetColor: string;
  glowColor: string;
  title: string;
  category: 'Full-Stack' | 'Mobile' | 'Web App' | 'AI / Computer Vision' | 'All';
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Live & Deployed' | 'In Development' | 'Concept / Prototype';
  previewImage?: string;
  year: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frameworks' | 'Backend' | 'Database' | 'Tools';
  icon: string;
  description: string;
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
  experienceLevel: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type: 'Internship' | 'Leadership';
  duration: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  badge: string;
  status: 'Completed' | 'Ongoing';
  projectLink?: string;
}

export interface LeadershipItem {
  title: string;
  role: string;
  organization: string;
  highlights: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  type: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
