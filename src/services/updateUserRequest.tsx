import { api } from "./api";

export interface iUpdateUser {
  name?: string;
  avatar?: string;
  aplly_jobs?: [];
}

export async function updateUser(data: iUpdateUser, id: number) {
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
}
