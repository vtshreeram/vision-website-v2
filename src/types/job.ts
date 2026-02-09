export interface JobData {
  title: string;
  department: string;
  about_company: string;
  why_join_us: string[];
  job_description: string[];
  roles_and_responsibility: string[];
  job_type: string[];
  location: string;
  salary: string;
  positions: number;
}

export type JobsData = JobData[];
