import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iContextValue, iChildren, iUser, iRegister, iLogin } from "./types";

export const authContext = createContext({} as iContextValue);

export const AuthProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [editProfileCompany, setEditProfileCompany] = useState(false);
  const [editJobModal, setEditJobModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@ID");
      setLoading(true);

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
      await api.post("users", body);

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
          navigate("/home");
        } else {
          navigate("/company");
        }
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha invalidos");
      setLoading(false);
    }
  };

  return (
    <authContext.Provider
      value={{
        registerUser,
        login,
        user,
        setUser,
        loading,
        setLoading,
        isVisible,
        setVisible,
        editProfileCompany,
        setEditProfileCompany,
        editJobModal,
        setEditJobModal,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
