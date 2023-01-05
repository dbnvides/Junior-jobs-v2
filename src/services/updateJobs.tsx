import { api } from "./api";

export interface iUpdateJob {
  userId?: number;
  job_name?: string;
  period?: string;
  work_type?: string;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  candidate?: [];
}

export const updateJob = async (data: iUpdateJob, id: number) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.patch(`users/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
