import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

interface iCompanyProviderProps {
  children: React.ReactNode;
}

interface iCompanyContext {
  modalViewer: boolean;
  setModalViewer: React.Dispatch<React.SetStateAction<boolean>>;
  setJobs: React.Dispatch<React.SetStateAction<iJobs[]>>;
  jobs: iJobs[];
  setJobViewer: React.Dispatch<React.SetStateAction<iJobs | undefined>>;
  jobViewer: iJobs | undefined;
}

interface iUser {
  email: string;
  name: string;
  password: string;
  documentation: string;
  avatar: string | undefined;
  type: string;
  id: number;
  apply_jobs?: any;
}

interface iJobs {
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

export const CompanyContext = createContext({} as iCompanyContext);

export const CompanyProvider = ({ children }: iCompanyProviderProps) => {
  const [modalViewer, setModalViewer] = useState(false);
  const [jobs, setJobs] = useState<iJobs[]>([]);
  const [jobViewer, setJobViewer] = useState<iJobs>();

  return (
    <CompanyContext.Provider
      value={{
        modalViewer,
        setModalViewer,
        jobs,
        setJobs,
        jobViewer,
        setJobViewer,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
