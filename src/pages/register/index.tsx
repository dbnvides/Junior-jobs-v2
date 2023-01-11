import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SpanErro, StyleDiv, StyleSectionRe } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authContext } from "../../contexts/authContext";
import { iRegister } from "../../contexts/types";

export const Register = () => {
  const [typed, setTyped] = useState(false);
  const { registerUser } = useContext(authContext);
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("O nome e obrigatorio")
      .min(4, "o minino de caracteres e 4"),
    email: yup
      .string()
      .required("O email e obrigatorio")
      .email("email invalido"),
    documentation: yup
      .string()
      .required(typed ? "cnpj obrigatorio" : "cpf obrigatorio")
      .matches(
        typed
          ? /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/
          : /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
        typed ? "O cnpj tem 14 digitos" : "O cpf tem 11 digitos"
      ),
    avatar: yup.string().required("Avatar obrigatorio"),
    password: yup
      .string()
      .required("A senha e obrigatoria")
      .matches(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
      .matches(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
      .matches(/(?=.*?[0-9])/, "pelo menos um numero")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Pelo menos um caractere especial")
      .min(8, "pelo menos oito caracteres"),
    confirPass: yup
      .string()
      .required("Confirmação da senha e obrigatoria")
      .oneOf([yup.ref("password")], "As senhas devem ser a mesma "),
    locality: yup.string().required("Localizacão obrigatoria"),
    site: yup.string().required("Site obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(schema),
  });
  let types = {
    type: "Dev",
    linkedin: "",
    tecnology: "",
    bio: "",
  };
  if (typed) {
    types.type = "Company";
  }
  const onSubmit: SubmitHandler<iRegister> = (data) => {
    registerUser({ ...data, ...types });
  };
  return (
    <>
      <Header />
      <StyleSectionRe>
        <div>
          <h2>Cadastro</h2>
          <StyleDiv>
            <button onClick={() => setTyped(false)}>Dev</button>
            <button onClick={() => setTyped(true)}>Company</button>
          </StyleDiv>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            type="text"
            placeholder={typed ? "Nome fantasia" : "Digite seu nome"}
            {...register("name")}
          />
          {errors.name?.message && <SpanErro>{errors.name.message}</SpanErro>}
          <Input
            label="Email"
            type="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email?.message && <SpanErro>{errors.email.message}</SpanErro>}
          <Input
            label={typed ? "CNPJ" : "CPF"}
            type="text"
            placeholder={typed ? "Digite seu cnpj" : "Digite seu cpf"}
            {...register("documentation")}
          />
          {errors.documentation?.message && (
            <SpanErro>{errors.documentation.message}</SpanErro>
          )}
          <Input
            label="Avatar"
            type="url"
            placeholder={typed ? "Logo da empresa" : "Foto de perfil"}
            {...register("avatar")}
          />
          {errors.avatar?.message && (
            <SpanErro>{errors.avatar.message}</SpanErro>
          )}
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message && (
            <SpanErro>{errors.password.message}</SpanErro>
          )}
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirPass")}
          />
          {errors.confirPass?.message && (
            <SpanErro>{errors.confirPass.message}</SpanErro>
          )}
          {typed && (
            <Input
              label="Localidade"
              type="text"
              placeholder="Digite sua cidade"
              {...register("locality")}
            />
          )}
          {errors.locality?.message && (
            <SpanErro>{errors.locality.message}</SpanErro>
          )}
          {typed && (
            <Input
              label="Site"
              type="url"
              placeholder="Digite seu site"
              {...register("site")}
            />
          )}
          {errors.site?.message && <SpanErro>{errors.site.message}</SpanErro>}
          <button type="submit">Cadastrar</button>
          <span>Ou</span>
          <Link to={"/"}>Voltar</Link>
        </form>
      </StyleSectionRe>
    </>
  );
};
