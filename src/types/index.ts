export interface Project {
  id: string;
  title: string;
  type: string[];
  status?: string;
  description: string;
  contribution?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  previewType: 'dashboard' | 'mobile' | 'document';
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageLabel?: string;
  primaryImageLabel?: string;
}

export interface SkillCategory {
  number: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    tagColor?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  category: 'Experience' | 'Achievement';
  typeLabel?: string;
  year?: string;
  title: string;
  subtitle: string;
  bulletPoints?: string[];
  tags?: string[];
}

