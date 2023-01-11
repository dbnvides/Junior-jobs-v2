import { api } from "./api";
import { toast } from "react-toastify";

export interface iEditJob {
    userId?: number;
    job_name?: string;
    period?: string;
    work_type?: string;
    description?: string;
    requirements?: string;
    responsabilitys?: string;
    candidate?: [];
}

export const editJob = async (data: iEditJob) => {
    const token = localStorage.getItem("@TOKEN");
    try {
        const response = await api.patch<iEditJob>("jobs/", data, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log(data);
        toast.success("Vaga alterada com sucesso");
        return response.data;
    } catch (error) {
        toast.error("Ops! Algo deu errado.");
        console.log(error);
    }
};
