export interface WorkExperience {
  _type: 'workExperience';
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface AcademicPosition {
  _type: 'academicPosition';
  title: string;
  institution: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  researchAreas: string[];
}

export interface Education {
  _type: 'education';
  degree: string;
  institution: string;
  field: string;
  startYear: number;
  endYear: number;
  dissertationTitle?: string;
  principalAdvisor?: string;
  coAdvisor?: string;
}

export interface Skill {
  _type: 'skill';
  category: string;
  name: string;
}

export interface Award {
  _type: 'award';
  title: string;
  organization: string;
  year: number;
  description?: string;
}

export interface Post {
  _type: 'post';
  title: string;
  publishedAt: string;
  description: string;
}

export interface Portfolio {
  _type: 'portfolio';
  title: string;
  description: string;
  projectUrl?: string;
}

export type SanityDocument = 
  | WorkExperience 
  | AcademicPosition 
  | Education 
  | Skill 
  | Award 
  | Post 
  | Portfolio;