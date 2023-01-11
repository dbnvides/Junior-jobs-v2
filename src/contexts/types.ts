import React from "react";

import { IJob } from "./UserContext/type";

export interface iLogin {
  email: string;
  password: string;
}
export interface iRegister {
  name: string;
  email: string;
  password: string;
  confirPass: string;
  documentation: string;
  avatar: string;
  locality:string;
  site:string;
  types?: {
    type :string;
    linkedin: string;
    tecnology: string;
    bio: string;
    
  }
}

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
  avatar: string | undefined;
  type: string;
  id: number;
  apply_jobs?: IJob[] | [];
}
