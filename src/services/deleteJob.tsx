import { api } from "./api";

export const deleteJob = async (id: number) => {
  const token = localStorage.getItem("token");

  try {
    const response = await api.patch(`users/2${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
