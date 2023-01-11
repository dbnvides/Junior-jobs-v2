export interface iCompanyProviderProps {
  children: React.ReactNode;
}

export interface iCompanyContext {
  modalViewer: boolean;
  setModalViewer: React.Dispatch<React.SetStateAction<boolean>>;
  setJobs: React.Dispatch<React.SetStateAction<iJobs[]>>;
  jobs: iJobs[];
  setJobViewer: React.Dispatch<React.SetStateAction<iUser[]>>;
  jobViewer: iUser[];
  loadJobs: () => void;
  jobId: number | undefined;
  setJobId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

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
