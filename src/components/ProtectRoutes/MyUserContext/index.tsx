import { Outlet } from "react-router-dom";
import { JobProvider } from "../../../contexts/UserContext/userContext";

export const MyUserContext = () => {
  return (
    <JobProvider>
      <Outlet />
    </JobProvider>
  );
};
