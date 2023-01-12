import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { authContext } from "../../contexts/authContext";
import { SpanErro } from "../register/style";
import { StyleSection } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadPage } from "../../components/Loading";
import { iLogin } from "../../contexts/types";
import { schema } from "./loginSchema";

export const Login = () => {
  const { login, setLoading, loading, user } = useContext(authContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iLogin> = (data) => {
    localStorage.clear();
    login(data);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(true);

    const validation = () => {
      if (user?.type === "Company" || user?.type === "company") {
        navigate("/company");
      } else if (user?.type === "Dev") {
        navigate("/home");
      }
      setLoading(false);
    };
    validation();
  }, []);

  return (
    <>
      {loading && <LoadPage />}
      <Header />
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
