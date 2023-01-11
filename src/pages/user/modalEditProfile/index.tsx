import { Input } from "../../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormModalEdit } from "./types";
import { Textarea } from "../../../components/Textarea";
import { formEditSchema } from "./editSchema";
import { StyledModalEditProfile } from "./styled";
import { ModalBase } from "../../../components/Modal";
import { authContext } from "../../../contexts/authContext";
import { useContext, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const ModalEditProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user, setVisible, setUser } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormModalEdit>({
    mode: "onChange",
    resolver: yupResolver(formEditSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      linkedin: user?.linkedin,
      tecnology: user?.tecnology,
      avatar: user?.avatar,
    },
  });

  const updateUser = async (data: IFormModalEdit, id: number) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const response = await api.patch(`users/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Perfil atualizado com sucesso!");
      setVisible(false);
      setUser(response.data);
    } catch (error) {
      toast.error("Perfil não atualizado!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitFunction: SubmitHandler<IFormModalEdit> = async (data) => {
    updateUser(data, user?.id!);
  };

  return (
    <ModalBase title={"Editar perfil"}>
      <StyledModalEditProfile>
        <div className="modalEditProfileContainer">
          <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
            <Input label="Nome" type="text" placeholder="Digite seu nome" {...register("name")} />
            <Input
              label="Avatar"
              type="text"
              placeholder="Link da sua foto de perfil"
              {...register("avatar")}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Seu email aqui!"
              {...register("email")}
            />
            {errors.email && <span className="errorMessage">{errors.email.message}</span>}
            <Input
              label="Linkedin"
              type="text"
              placeholder="Coloque seu link aqui!"
              {...register("linkedin")}
            />
            {errors.linkedin && <span className="errorMessage">{errors.linkedin.message}</span>}
            <Input
              label="Tecnologias"
              type="text"
              placeholder="React, js, ..."
              {...register("tecnology")}
            />
            {errors.tecnology && <span className="errorMessage">{errors.tecnology.message}</span>}
            <Textarea
              label="Bio"
              placeholder="Informe sua bio aqui!"
              id="userBio"
              {...register("bio")}
            />
            {errors.bio && <span className="errorMessage">{errors.bio.message}</span>}
            <button type="submit" disabled={!isDirty || !isValid}>
              Salvar
            </button>
          </form>
        </div>
      </StyledModalEditProfile>
    </ModalBase>
  );
};

export default ModalEditProfile;
