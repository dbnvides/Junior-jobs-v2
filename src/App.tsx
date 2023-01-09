import { ContextoProvider } from "./contexts/HomeContext";
import { Home } from "./pages/home";
import { Global } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes } from "react-router-dom";
import { MainRoutes } from "./routes";

function App() {
  return (
    <>
      <Global />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <MainRoutes />
    </>
  );
}

export default App;
