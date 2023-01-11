import { useContext } from "react";
import { CompanyContext } from "../../contexts/CompanyContext/companyContext";
import { ContainerModalCompany } from "./style";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../services/api";
import { authContext } from "../../contexts/authContext";

interface iEditData {
  name: string;
  email: string;
  avatar: string;
}

export const ModalEditCompany = () => {
  const { setEditProfileCompany } = useContext(authContext);
  const { user } = useContext(authContext);

  const { register, handleSubmit } = useForm<iEditData>({
    mode: "onBlur",
  });

  console.log(user);

  const updateUser = async (data: iEditData) => {
    const token = localStorage.getItem("@TOKEN");
    console.log(data);
    try {
      const response = await api.patch(`users/${user?.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setEditProfileCompany(false);
    } catch (error) {
      console.log(error);
    }
  };

  const submit: SubmitHandler<iEditData> = (data) => {
    console.log(data);
    updateUser(data);
  };

  return (
    <ContainerModalCompany>
      <div className="modalAddJobContainer">
        <h3 className="modalAddJobTitle">Editar perfil</h3>
        <button
          className="closeModalAddJobButton"
          onClick={() => setEditProfileCompany(false)}
        >
          X
        </button>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite o título da vaga"
            {...register("name")}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Digite o título da vaga"
            {...register("email")}
          />
          <Input
            label="Avatar"
            type="text"
            placeholder="Digite o título da vaga"
            {...register("avatar")}
          />
          <button className="addJobButton" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </ContainerModalCompany>
  );
};
