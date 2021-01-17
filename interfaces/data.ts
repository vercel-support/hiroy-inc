export interface SocialLinks {
  facebook: string;
  twitter: string;
  pinterest: string;
  behance: string;
  linkedin: string;
  dribbble: string;
  github: string;
}

export interface Information {
  name: string;
  aboutContent: string;
  age: number;
  phone: string;
  nationality: string;
  language: string;
  email: string;
  address: string;
  freelanceStatus: string;
  socialLinks: SocialLinks;
  brandImage: string;
  aboutImage: string;
  aboutImageLg: string;
  cvfile: string;
}

export interface Service {
  title: string;
  icon: string;
  details: string;
}

export interface Author {
  name: string;
  designation: string;
}

export interface Review {
  id: number;
  content: string;
  author: Author;
}

export interface Skill {
  title: string;
  value: number;
}

export interface Portfolio {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  largeImageUrl: string[];
  url: string;
}

export interface WorkingExperience {
  id: number;
  year: string;
  position: string;
  company: string;
  details: string;
}

export interface EducationExperience {
  id: number;
  year: string;
  graduation: string;
  university: string;
  details: string;
}

export interface Experience {
  workingExperience: WorkingExperience[];
  educationExperience: EducationExperience[];
}

export interface Blog {
  id: number;
  title: string;
  featuredImage: string;
  filesource: string;
  createDay: string;
  createMonth: string;
  createYear: string;
}

export interface ContactInfo {
  phoneNumbers: string[];
  emailAddress: string[];
  address: string;
}

export interface InformationData {
  information: Information;
  services: Service[];
  reviews: Review[];
  skills: Skill[];
  portfolios: Portfolio[];
  experience: Experience;
  blogs: Blog[];
  contactInfo: ContactInfo;
  lightMode: boolean;
}