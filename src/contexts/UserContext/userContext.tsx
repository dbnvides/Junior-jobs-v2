import { createContext } from "react";
import { IContextChildren } from "../types";

export const userContext = createContext({})

export const UserProvider = ({ children }: IContextChildren) => {
    <userContext.Provider value={{}}>
        {children}
    </userContext.Provider>
}