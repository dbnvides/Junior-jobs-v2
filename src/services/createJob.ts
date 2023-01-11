import { api } from "./api";
import { toast } from "react-toastify";

export interface iCreateJob {
  userId?: number;
  job_name?: string;
  period?: string;
  work_type?: string;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  candidate?: [];
}

export const createJob = async (data: iCreateJob) => {
  const token = localStorage.getItem("@TOKEN");
  try {
    const response = await api.post<iCreateJob>("jobs/", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("Vaga adicionada com sucesso");
    return response.data;
  } catch (error) {
    toast.error("Ops! Algo deu errado.");
    console.log(error);
  }
};
