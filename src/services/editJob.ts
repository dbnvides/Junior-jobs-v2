import { api } from "./api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CompanyContext } from "../contexts/CompanyContext/companyContext";

interface iEditJob {
  userId?: number;
  job_name?: string;
  period?: string;
  work_type?: string;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  candidate?: [];
}

const editJob = async (data: iEditJob, id: number | undefined) => {
  const token = localStorage.getItem("@TOKEN");

  try {
    const response = await api.patch<iEditJob>(`jobs/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    toast.success("Vaga alterada com sucesso");
    console.log(response.data);
  } catch (error) {
    toast.error("Ops! Algo deu errado.");
    console.log(error);
  }
};
