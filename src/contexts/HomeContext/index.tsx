import { createContext, useState } from "react";

export const HomeContext: any = createContext({});

export const ContextoProvider = ({ children }: any) => {
  const [jobsList, setJobsList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocal, setSearchLocal] = useState("");
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
