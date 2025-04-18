export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
}
