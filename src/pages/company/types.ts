export interface iUser {
  email: string;
  name: string;
  password: string;
  documentation: string;
  avatar: string | undefined;
  type: string;
  id: number;
  apply_jobs?: any;
}

export interface iJobs {
  description: string;
  id: number;
  job_name: string;
  period: string;
  requirements: string;
  responsabilitys: string;
  usersId: number;
  work_type: string;
  candidates: iUser[];
}
