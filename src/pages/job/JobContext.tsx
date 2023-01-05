import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IContextChildren } from "../../contexts/types";
import { api } from "../../services/api";

interface IJobContext{
  jobById(id : number, userId: number): Promise<void>
  job: IJob
  company: ICompany
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
    
    const jobById = async (id : number, userId: number): Promise<void> => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldmpvYjJAbWFpbC5jb20iLCJpYXQiOjE2NzI5NDAxNDEsImV4cCI6MTY3Mjk0Mzc0MSwic3ViIjoiMSJ9.ypUWJETzSXr8EBQ_Ig4e0qDpVYXns84yLZ3fsu8Vh-k"
      
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
      jobById(1,1)
    },[])

return(
    <jobContext.Provider value={{ jobById, job, company}}>
        {children}
    </jobContext.Provider>
)
}