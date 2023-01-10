export interface IJobContext {
  job: IJob;
  company: ICompany;
  addJob(job : IJob): void;
  loading: boolean
}

export interface IJob {
  userId?: number;
  job_name?: string;
  period?: string;
  work_type?: string;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  id?: number;
  candidates?: number[];
}

export interface ICompany {
  name?: string;
  email?: string;
  password?: string;
  documentation?: string;
  avatar?: string;
  type?: string;
  id?: number;
}

export interface IResponseProfile {
  email: string;
  name: string;
  documentation: string;
  avatar: string;
  type: "dev" | "company";
  id: number;
  apply_jobs?: IJob[];
}
