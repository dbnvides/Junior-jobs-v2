export interface IResponseProfile {
  email: string;
  name: string;
  documentation: string;
  avatar: string;
  type: "dev" | "company";
  id: number;
  apply_jobs?: IJobUser[];
}

export interface IJobUser {
  job_name: string;
  id: number;
  period: string;
  work_type: string;
  description: string;
  requeriments: string;
  responsabilitys: string;
  candidates: number[];
}
