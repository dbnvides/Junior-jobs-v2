import { iUser } from "../authContext";

export interface IJobContext {
  jobById(id: number, userId: number): Promise<void>;
  job: IJob;
  company: ICompany;
  addJob(job : IJob): void;
}

export interface IJob {
  usersId?: number;
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
  candidates?: iUser[];
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
