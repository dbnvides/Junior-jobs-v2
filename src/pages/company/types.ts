import { iUser } from "../../contexts/types";

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
