import { MainRoutes as Routes } from "./routes/index";
import { Global } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CustomThemeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <>
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
      <CustomThemeProvider>
        <Global />
        <Routes />
      </CustomThemeProvider>
    </>
  );
}

export default App;
