import React, { createContext } from "react";
import { ICompanyContext, IPropChildren } from "./types";

export const companyContext = createContext({} as ICompanyContext);

export const CompanyProvider = ({ children }: IPropChildren) => {
  //   return <companyContext.Provider>{children}</companyContext.Provider>;
  return <div>teste</div>;
};
