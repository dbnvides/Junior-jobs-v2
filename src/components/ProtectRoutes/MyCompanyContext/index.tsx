import { Outlet } from "react-router-dom";
import { CompanyProvider } from "../../../contexts/CompanyContext/companyContext";

export const MyCompanyContext = () => {
  return (
    <CompanyProvider>
      <Outlet />
    </CompanyProvider>
  );
};
