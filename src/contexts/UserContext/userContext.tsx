import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IContextChildren, iUser } from "../../contexts/types";
import { api } from "../../services/api";
import { authContext } from "../authContext";
import { ICompany, IJob, IJobContext, IUpdateUser} from "./type";

export const jobContext = createContext({} as IJobContext);

export const JobProvider = ({ children }: IContextChildren) => {
  const { user, setUser } = useContext(authContext);

  const [job, setJob] = useState<IJob>({});
  const [company, setCompany] = useState<ICompany>({});
  const [applyed, setApplyed] = useState<IJob[]>([]);
  const [applying, setApplying] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const userId = Number(localStorage.getItem("@ID"));
  const token = localStorage.getItem("@TOKEN");
  const jobId = Number(localStorage.getItem("@JOBID"));
  const companyId = Number(localStorage.getItem("@COMPANYID"));

  const jobById = async (): Promise<void> => {
    setLoading(true);
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

      setJob(jobs.data.find((job: IJob) => job.id === jobId));
      setCompany(users.data.find((company: ICompany) => company.id === companyId));
      setUser(users.data.find((user: iUser) => user.id === userId));
      setApplyed(users.data.find((user: iUser) => user.id === userId).apply_jobs || []);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const find = user?.apply_jobs?.find((item: IJob) => item.id === job?.id) || false;

  const applyJob: IUpdateUser = {
    apply_jobs: applyed,
  };

  const addJob = (job: IJob): void => {
    const find = user?.apply_jobs?.find((item: IJob) => item.id === job.id) || false;

    if (!find && !applying) {
      setApplying(true);
      setApplyed([...applyed, job]);
      toast.success("Candidatura enviada com sucesso", {
        toastId: "yes",
      });
    } else {
      toast.warn("Candidatura já enviada", {
        toastId: "yes",
      });
    }
    
  };

  useEffect(() => {
    jobById();
    setApplying(false);
  }, [jobId, companyId]);

  useEffect(() => {
    if (applying) {
    const updateUser = async (data: IUpdateUser, id: number) : Promise<void> => {
    try {
      setLoading(true)
      const response = await api.patch(`users/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data)
    } catch (error) {
      setLoading(false)
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  updateUser(applyJob, userId)
    }
  }, [applyed]);

  return (
    <jobContext.Provider value={{ job, company, addJob, loading, find }}>{children}</jobContext.Provider>
  );
};
