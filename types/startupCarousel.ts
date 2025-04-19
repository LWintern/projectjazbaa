// types/startupTypes.ts
export interface LogoItem {
    name: string;
    logo: string;
    tagline: string;
    color: string;
    category?: string; // Optional: Add if you want to categorize startups
  }
  
  // Optional: Add more types if needed
  export type LogoRow = LogoItem[];
  
  export interface LogoCategory {
    name: string;
    logos: LogoItem[];
  }