export interface IResponseProfile {
  email: string;
  name: string;
  documentation: string;
  avatar: string;
  type: "dev" | "company";
  id: number;
  jobs?: IJobUser[];
}

export interface IJobUser {
  job_name: string;
  period: string;
  work_type: string;
  description: string;
  requeriments: string;
  responsabilitys: string;
}
