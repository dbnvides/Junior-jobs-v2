import { JobProvider } from "./pages/job/JobContext";
import { MainRoutes as Routes } from "./routes";
import { Global } from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <JobProvider>
        <Routes />
      </JobProvider>
    </>
  );
}

export default App;
