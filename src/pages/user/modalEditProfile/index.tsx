import { ModalBase } from "../../../components/Modal";
import { Input } from "../../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormModalEdit } from "./types";
import { Textarea } from "../../../components/Textarea";
import { StyledForm } from "./styled";
import { formEditSchema } from "./editSchema";

export const ModalEditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormModalEdit>({
    mode: "onChange",
    resolver: yupResolver(formEditSchema),
  });

  const onSubmitFunction: SubmitHandler<IFormModalEdit> = async (data) => {
    console.log(data);
  };

  return (
    <ModalBase title={"Editar perfil"}>
      <StyledForm noValidate onSubmit={handleSubmit(onSubmitFunction)}>
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
          // value={userData?.email}
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
      </StyledForm>
    </ModalBase>
  );
};

export default ModalEditProfile;
