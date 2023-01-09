import { createContext, useState } from "react";

export const ContextoTeste: any = createContext({});

export const ContextoProvider = ({ children }: any) => {
  const [jobsList, setJobsList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocal, setSearchLocal] = useState("");
  return (
    <ContextoTeste.Provider
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
    </ContextoTeste.Provider>
  );
};
