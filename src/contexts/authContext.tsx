import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iLogin } from "../services/loginRequest";
import { iRegister } from "../services/registerRequest";


interface iChildren {
    children: React.ReactNode
}

interface iContextValue {
    registerUser: (body: iRegister) => Promise<void>,
    login: (body: iLogin) => Promise<void>
}
interface iUser {
    email: string;
    name: string;
    password: string;
    documentation: string;
    avatar: string;
    type: string;
    id: number
}
export const authContext = createContext({} as iContextValue)

export const AuthProvider = ({ children }: iChildren) => {
    const [ user , setUser ] = useState<iUser[] | null>(null)
    const navigate = useNavigate()

    const registerUser = async (body : iRegister) => {
        try {
            const response = await api.post("users",body)

            toast.success("Usuario criado com sucesso")
            setTimeout(() => {
                navigate("/");
            }, 2000);
            
            
        } catch (error: AxiosError | any ) {
            toast.error(error.response.data)
            console.error(error)
        }
    }

    const login = async (body : iLogin) => {
        try {
            const response = await api.post("login",body)
            const { accessToken, user: userResponse } = response.data;
            localStorage.setItem("@TOKEN",accessToken)
            localStorage.setItem("@ID",userResponse.id)
            setUser(userResponse)

            toast.success("Login feito com sucesso")
            setTimeout(() => {
                if(userResponse.type ==="Dev"){
                    navigate("/UserProfile")
                }else{
                    navigate("/Company")
                }
            }, 2000);
        } catch (error) {
            toast.error("Email ou senha invalidos")
        }
    }


    return (
        <authContext.Provider value={{ registerUser, login }}>
            {children}
        </authContext.Provider>
    )
}