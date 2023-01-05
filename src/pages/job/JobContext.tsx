import { createContext, useEffect, useState } from "react";
import { IContextChildren } from "../../contexts/types";
import { api } from "../../services/api";

interface IJobContext{
  jobById(id : number, userId: number): Promise<void>
  job: IJob
  company: ICompany
  applyJob(jobId : number | undefined): void
  applyList: number[]
}

interface IJob{
    userId?: number;
    job_name?: string;
    period?: string;
    work_type?: string;
    description?: string;
    requirements?: string;
    responsabilitys?: string;
    id?: number; 
}

interface ICompany {
  name?: string;
  email?: string;
  password?: string;
  documentation?: string;
  avatar?: string;
  type?: string;
  id?:number
}

export const jobContext = createContext({} as IJobContext)

export const JobProvider = ({ children }: IContextChildren) => {
    const [job , setJob] = useState<IJob>({})
    const [company , setCompany] = useState<ICompany>({})
    const [applyList , setApplyList] = useState<number[]>([])
    
    const jobById = async (id : number | undefined, userId: number | undefined): Promise<void> => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdnQGdnLmNvbSIsImlhdCI6MTY3Mjk0ODk0NSwiZXhwIjoxNjcyOTUyNTQ1LCJzdWIiOiIxMCJ9.5iaHjXopaAPk1If0MJwdqqGZgL2KQPYAYhv-1NRbshs"
      
        try {
          const jobs = await api.get(`jobs`,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          const companys = await api.get(`users`,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

         setJob(jobs.data.find((job : IJob)=> job.id === id ))
         setCompany(companys.data.find((company : ICompany)=> company.id === userId ))
        } 

        catch (error) {
          console.log(error);
        }
    }

    useEffect(()=>{
      jobById(2,1)

    },[])
    
    const applyJob = (jobId : number) =>{

    setApplyList([...applyList, jobId]) 

    }

return(
    <jobContext.Provider value={{ jobById, job, company, applyJob, applyList }}>
        {children}
    </jobContext.Provider>
)

}