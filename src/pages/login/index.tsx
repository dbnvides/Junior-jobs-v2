import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { StyleSection } from "./style";

export const Login = () => {
  return (
    <>
      <Header />
      <StyleSection>
        <div>
          <h2>Login</h2>
        </div>
        <form>
          <Input label="Email" type="email" placeholder="Digite seu email" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />
          <button>Entrar</button>
          <span>Ou</span>
          <Link to={"/register"}>Cadastrar</Link>
        </form>
      </StyleSection>
    </>
  );
};
