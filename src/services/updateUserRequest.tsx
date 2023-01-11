import { IJob } from "../contexts/UserContext/type";
import { api } from "./api";

export interface iUpdateUser {
  name?: string;
  avatar?: string;
  apply_jobs?: IJob[];
}

export const updateUser = async (data: iUpdateUser, id: number) => {
 
  const token = localStorage.getItem("@TOKEN");
  try {
    const response = await api.patch(`users/${id}`, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response
  } catch (error) {
    console.log(error);
  }
};
