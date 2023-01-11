import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";

interface iCompanyProviderProps {
  children: React.ReactNode;
}

interface iCompanyContext {
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
  const [jobViewer, setJobViewer] = useState<iUser[]>([]);
  const [jobId, setJobId] = useState<number>();

  const loadJobs = async () => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@ID");
    if (!token) {
      return null;
    }
    try {
      const { data } = await api.get(`jobs?usersId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        modalViewer,
        setModalViewer,
        jobs,
        setJobs,
        jobViewer,
        setJobViewer,
        loadJobs,
        jobId,
        setJobId,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
