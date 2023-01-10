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
  const { setModalEditCompany } = useContext(CompanyContext);
  const { user } = useContext(authContext);

  const { register, handleSubmit } = useForm<iEditData>({
    mode: "onBlur",
  });

  console.log(user);

  const updateUser = async (data: iEditData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`users/${user?.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submit: SubmitHandler<iEditData> = (data) => {
    updateUser(data);
  };

  return (
    <ContainerModalCompany>
      <div className="modalAddJobContainer">
        <h3 className="modalAddJobTitle">Editar perfil</h3>
        <button
          className="closeModalAddJobButton"
          onClick={() => setModalEditCompany(false)}
        >
          X
        </button>
        <form noValidate onSubmit={handleSubmit(submit)}>
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
