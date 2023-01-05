import { api } from "./api";

export interface iLogin {
  email: string;
  password: string;
}

export const login = async (data: iLogin) => {
  try {
    const response = await api.post("login", data);
    const { accessToken, user: userResponse } = response.data;

    localStorage.setItem("token", accessToken);
  } catch (error) {
    console.log(error);
  }
};
