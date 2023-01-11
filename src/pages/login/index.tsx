import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { authContext } from "../../contexts/authContext";
import { SpanErro } from "../register/style";
import { StyleSection } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadPage } from "../../components/Loading";
import { iLogin } from "../../contexts/types";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("O email e obrigatorio").email("email invalido"),
    password: yup.string().required("A senha e obrigatoria"),
  });
  const { login, setLoading, loading } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iLogin> = (data) => {
    localStorage.clear();
    login(data);
    setLoading(true);
  };

  return (
    <>
      <Header />
      {loading && <LoadPage />}
      <StyleSection>
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" type="email" placeholder="Digite seu email" {...register("email")} />
          {errors.email?.message && <SpanErro>{errors.email.message}</SpanErro>}
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message && <SpanErro>{errors.password.message}</SpanErro>}
          <button type="submit">Entrar</button>
          <span>Ou</span>
          <Link to={"/register"}>Cadastrar</Link>
        </form>
      </StyleSection>
    </>
  );
};
