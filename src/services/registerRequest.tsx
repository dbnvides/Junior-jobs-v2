import { api } from "./api";

export interface iRegister {
  name: string;
  email: string;
  password: string;
  confirPass: string;
  documentation: string;
  avatar: string;
  types?: {
    type :string;
    linkedin: string;
    tecnology: string;
    bio: string;
    locality:string;
  }
}

export const registerUser = async (data: iRegister) => {
  try {
    const response = await api.post("users", data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
