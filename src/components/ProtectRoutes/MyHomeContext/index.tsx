import { Outlet } from "react-router-dom";
import { ContextoProvider } from "../../../contexts/HomeContext";

export const MyHomeContext = () => {
  return (
    <ContextoProvider>
      <Outlet />
    </ContextoProvider>
  );
};
