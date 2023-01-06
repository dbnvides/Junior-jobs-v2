import { createContext, useState } from "react";

export const ContextoTeste: any = createContext({});

export const ContextoProvider = ({ children }: any) => {
  const [jobsList, setJobsList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <ContextoTeste.Provider
      value={{ jobsList, setJobsList, searchTitle, setSearchTitle }}
    >
      {children}
    </ContextoTeste.Provider>
  );
};
