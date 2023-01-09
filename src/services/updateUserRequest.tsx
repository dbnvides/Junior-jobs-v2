import { api } from "./api";

export interface iUpdateUser {
  name?: string;
  avatar?: string;
  apply_jobs?: number[];
}

export const updateUser = async (data: iUpdateUser, id: number) => {
  
  const token = localStorage.getItem("@TOKEN");
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
