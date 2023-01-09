import { isVisible } from "@testing-library/user-event/dist/utils";
import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iLogin } from "../services/loginRequest";
import { iRegister } from "../services/registerRequest";
import { IJob } from "./UserContext/type";

interface iChildren {
  children: React.ReactNode;
}

interface iContextValue {
  registerUser: (body: iRegister) => Promise<void>;
  login: (body: iLogin) => Promise<void>;
  user: iUser | null;
  loading: boolean;
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
}
interface iUser {
  email: string;
  name: string;
  password: string;
  documentation: string;
  avatar: string;
  type: string;
  id: number;
  apply_jobs?: IJob[];
}
export const authContext = createContext({} as iContextValue);

export const AuthProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@ID");

      if (!token) {
        setLoading(false);
        return null;
      }
      try {
        const { data } = await api.get(`users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const registerUser = async (body: iRegister) => {
    try {
      const response = await api.post("users", body);

      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: AxiosError | any) {
      toast.error(error.response.data);
      console.error(error);
    }
  };

  const login = async (body: iLogin) => {
    try {
      const response = await api.post("login", body);
      const { accessToken, user: userResponse } = response.data;
      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@ID", userResponse.id);
      setUser(userResponse);

      toast.success("Login feito com sucesso");
      setTimeout(() => {
        if (userResponse.type === "Dev") {
          navigate("/user");
        } else {
          navigate("/company");
        }
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha invalidos");
    }
  };

  return (
    <authContext.Provider
      value={{ registerUser, login, user, setUser, loading, isVisible, setVisible }}
    >
      {children}
    </authContext.Provider>
  );
};
