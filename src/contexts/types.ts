import React from "react";
import { iLogin } from "../services/loginRequest";
import { iRegister } from "../services/registerRequest";
import { IJob } from "./UserContext/type";

export interface IContextChildren {
  children: React.ReactNode;
}

export interface iChildren {
  children: React.ReactNode;
}

export interface iContextValue {
  registerUser: (body: iRegister) => Promise<void>;
  login: (body: iLogin) => Promise<void>;
  user: iUser | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  editProfileCompany: boolean;
  setEditProfileCompany: React.Dispatch<React.SetStateAction<boolean>>;
  loadingInModal: boolean;
  setLoadingInModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface iUser {
  email: string;
  name: string;
  password: string;
  documentation: string;
  avatar: string;
  type: string;
  id: number;
  apply_jobs?: IJob[] | [];
}
