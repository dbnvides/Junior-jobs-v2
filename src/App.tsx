import { UserProfile } from "./pages/user";
import { MainRoutes as Routes } from "./routes";
import { Global } from "./styles/global";

function App() {
  return (
    <>
      <Global />
      {/* <Routes /> */}
      <UserProfile />
    </>
  );
}

export default App;
