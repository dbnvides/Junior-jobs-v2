import { api } from "./api";

export interface iUpdateUser {
  name?: string;
  avatar?: string;
  apply_jobs?: number[];
}

export const updateUser = async (data: any, id: number) => {
  console.log(data , id)
  // const token = localStorage.getItem("token");
  // try {
  //   const response = await api.patch(`users/${id}`, data, {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};
