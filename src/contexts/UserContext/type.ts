import { iUser } from "../types";

export interface IJobContext {
  job: IJob;
  company: ICompany;
  addJob(job: IJob): void;
  loading: boolean;
  find: false | IJob
  setApplyed: React.Dispatch<React.SetStateAction<IJob[]>>
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
  candidates?: iUser[];
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
  locality?: string;
  site?: string;
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

export interface IUpdateUser {
  name?: string;
  avatar?: string;
  apply_jobs?: IJob[];
}