/* ─────────────────────────────────────────────────────────────
   CV & Portfolio — Type Definitions
   Strongly typed data model for the entire portfolio.
   ───────────────────────────────────────────────────────────── */

// ── Social & Contact ────────────────────────────────────────

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'platzi'
  | 'email'
  | 'website'
  | 'instagram'
  | 'youtube'
  | 'dribbble'
  | 'behance';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  username?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  locationEmoji?: string;
  socials: SocialLink[];
}

// ── Personal / Hero ─────────────────────────────────────────

export interface PersonalInfo {
  fullName: string;
  displayName: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  avatarUrl?: string;
  resumeUrl?: string;
  contact: ContactInfo;
}

// ── Skills & Technologies ───────────────────────────────────

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'mobile'
  | 'design'
  | 'tools'
  | 'languages'
  | 'soft-skills';

export interface Skill {
  name: string;
  icon?: string;
  level: SkillLevel;
  category: SkillCategory;
  certified?: boolean;
  yearsOfExperience?: number;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  icon?: string;
  skills: Skill[];
}

// ── Work Experience ─────────────────────────────────────────

export interface WorkExperience {
  id: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  role: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  location: string;
  locationType: 'remote' | 'on-site' | 'hybrid';
  startDate: string; // ISO format: YYYY-MM
  endDate?: string;  // undefined = current
  description: string;
  highlights: string[];
  technologies: string[];
}

// ── Projects ────────────────────────────────────────────────

export type ProjectStatus = 'completed' | 'in-progress' | 'archived' | 'concept';

export interface ProjectLink {
  type: 'live' | 'github' | 'demo' | 'case-study' | 'figma' | 'docs';
  url: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  coverImage?: string;
  screenshots?: string[];
  status: ProjectStatus;
  featured: boolean;
  links: ProjectLink[];
  technologies: string[];
  category: string;
  startDate?: string;
  endDate?: string;
  highlights?: string[];
}

// ── Education ───────────────────────────────────────────────

export interface Education {
  id: string;
  institution: string;
  institutionUrl?: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
}

// ── Certifications ──────────────────────────────────────────

export type CertCategory = 'frontend' | 'backend' | 'database' | 'logic' | 'tools' | 'cesde' | 'all';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  issuerLogo?: string;
  issueDate: string;
  hours?: number;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  pdfUrl?: string;
  category?: 'frontend' | 'backend' | 'database' | 'logic' | 'tools';
  isOfficialDiploma?: boolean;
  skills?: string[];
}

// ── Testimonials / Recommendations ──────────────────────────

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  content: string;
  linkedinUrl?: string;
}

// ── Navigation ──────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// ── Complete CV Data Model ──────────────────────────────────

export interface CVData {
  personal: PersonalInfo;
  navigation: NavItem[];
  experience: WorkExperience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  skillGroups: SkillGroup[];
  testimonials?: Testimonial[];
}
