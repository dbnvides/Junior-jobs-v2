import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IContextChildren } from "../../contexts/types";
import { api } from "../../services/api";
import { iUpdateUser, updateUser } from "../../services/updateUserRequest";
import { ICompany, IJob, IJobContext } from "./type";

export const jobContext = createContext({} as IJobContext);

export const JobProvider = ({ children }: IContextChildren) => {
  const [job, setJob] = useState<IJob>({});
  const [user , setUser] = useState<any>({})
  const [company, setCompany] = useState<ICompany>({});
  const [applyed, setApplyed] = useState<IJob[]>([]);
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
      setUser(users.data.find((user: any) => user.id === userID));
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

  const addJob = (job : IJob): void => {
    const find = user?.apply_jobs?.find((item : any) => item.id === job.id) || false 
  
    if(!find && !loading){
      setLoading(true);
      setApplyed([...applyed, job]);
      toast.success("Candidatura enviada com sucesso",{
        toastId: "yes"
      })

    } else {
      setLoading(false)
      toast.warn("Candidatura já enviada",{
        toastId: "yes"
      })
    }
  };

  return (
    <jobContext.Provider value={{ jobById, job, company, addJob, loading }}>{children}</jobContext.Provider>
  );
};
