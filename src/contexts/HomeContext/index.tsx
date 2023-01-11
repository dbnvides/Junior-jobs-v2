import { createContext, useState } from "react";
import { IJob } from "../../pages/home/types";
import { IContextChildren } from "../types";
import { IContextHome } from "./types";

export const HomeContext = createContext({} as IContextHome);

export const ContextoProvider = ({ children }: IContextChildren) => {
  const [jobsList, setJobsList] = useState<IJob[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchLocal, setSearchLocal] = useState<string>("");
  return (
    <HomeContext.Provider
      value={{
        jobsList,
        setJobsList,
        searchTitle,
        setSearchTitle,
        searchLocal,
        setSearchLocal,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
