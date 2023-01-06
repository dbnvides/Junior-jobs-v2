import { ContextoProvider } from "./contexts/HomeContext";
import { Home } from "./pages/home";
import { Global } from "./styles/global";

function App() {
  return (
    <>
      <ContextoProvider>
        <Global />
        <Home />
      </ContextoProvider>
    </>
  );
}

export default App;
