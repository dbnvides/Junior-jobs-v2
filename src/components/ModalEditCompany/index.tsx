import { useContext } from "react";
import { toast } from "react-toastify";
import { ContainerModalCompany } from "./style";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../services/api";
import { authContext } from "../../contexts/authContext";
import { CompanyContext } from "../../contexts/CompanyContext/companyContext";

interface iEditData {
  name: string;
  email: string;
  avatar: string;
}

export const ModalEditCompany = () => {
  const { setEditProfileCompany, setUser } = useContext(authContext);
  const { user } = useContext(authContext);
  const { setLoading } = useContext(CompanyContext);

  const { register, handleSubmit } = useForm<iEditData>({
    mode: "onBlur",
    defaultValues: {
      name: user?.name,
      email: user?.email,
      avatar: user?.avatar,
    },
  });

  const updateUser = async (data: iEditData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const response = await api.patch(`users/${user?.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setEditProfileCompany(false);
      toast.success("Perfil atualizado com sucesso !");
      setUser(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    } finally {
      setLoading(false);
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
