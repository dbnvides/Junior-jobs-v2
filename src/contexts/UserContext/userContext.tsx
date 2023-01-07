import { createContext, useEffect, useState } from "react";
import { IContextChildren } from "../../contexts/types";
import { api } from "../../services/api";
import { iUpdateUser, updateUser } from "../../services/updateUserRequest";
import { ICompany, IJob, IJobContext, IResponseProfile } from "./type";

export const jobContext = createContext({} as IJobContext);

export const JobProvider = ({ children }: IContextChildren) => {
  const [job, setJob] = useState<IJob>({});
  const [allJobs, setAllJobs] = useState<IJob[] | []>([]);
  const [company, setCompany] = useState<ICompany>({});
  const [applyed, setApplyed] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const userID = Number(localStorage.getItem("@ID"));
  const token = localStorage.getItem("@TOKEN");

  const jobById = async (id: number, userId: number): Promise<void> => {
    try {
      const jobs = await api.get(`jobs`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const users = await api.get(`users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setJob(jobs.data.find((job: IJob) => job.id === id));
      setCompany(users.data.find((company: ICompany) => company.id === userId));
      setApplyed(users.data.find((user: ICompany) => user.id === userID).apply_jobs || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    jobById(1, 1);
  }, []);

  const applyJob: iUpdateUser = {
    apply_jobs: applyed,
  };

  useEffect(() => {
    if (loading) {
      updateUser(applyJob, userID);
    }
  }, [applyed]);

  const addJob = (jobId: number): void => {
    setLoading(true);

    !applyed.includes(jobId) && setApplyed([...applyed, jobId]);
  };

  return (
    <jobContext.Provider value={{ jobById, job, company, addJob, setAllJobs }}>
      {children}
    </jobContext.Provider>
  );
};
