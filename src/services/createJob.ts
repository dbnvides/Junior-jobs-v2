import { api } from "./api";

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
    const token = localStorage.getItem("token");
    try {
        const response = await api.post<iCreateJob>("jobs/", data, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.log(error);
    }
};
