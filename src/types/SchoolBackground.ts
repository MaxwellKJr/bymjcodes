export interface SchoolBackground {
  schoolName: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  fieldOfStudy?: string;
  gpa?: number;
  achievements?: string[];
  relevantCourses?: string[];
}