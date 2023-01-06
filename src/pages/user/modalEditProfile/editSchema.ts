import * as yup from "yup";

export const formEditSchema = yup.object().shape({
  email: yup.string().required("O email e obrigatorio").email("email invalido"),
  linkedin: yup.string().required("O linkedin é obrigatório"),
  tecnology: yup.string().required("Precisa adicionar uma tecnologia"),
  bio: yup
    .string()
    .required("Escreva sua bio")
    .min(2, "Descrição muito curta")
    .max(1000, "Descrição muito longa"),
});
