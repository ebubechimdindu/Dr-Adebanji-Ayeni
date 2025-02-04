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

export interface BlogPost {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  description?: string;
  publishedAt: string;
}

export interface Portfolio {
  _id: string;
  _type: 'portfolio';
  title: string;
  description: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
  projectUrl?: string;
}

// Alias for backward compatibility
export type PortfolioItem = Portfolio;

export interface Affiliation {
  _id: string;
  organization: string;
  membershipNumber: string;
}

// Update SanityDocument type to include Affiliation
export type SanityDocument = 
  | WorkExperience 
  | AcademicPosition 
  | Education 
  | Skill 
  | Award 
  | BlogPost 
  | Portfolio
  | Affiliation;
