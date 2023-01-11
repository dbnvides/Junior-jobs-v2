import * as yup from "yup";

export const formSchema = yup.object().shape({
    job_name: yup
        .string()
        .required("Informe o titulo da vaga")
        .min(2, "Título muito curto")
        .max(100, "Título muito longo"),
    period: yup
        .string()
        .required("Informe Integral ou Meio Peródo")
        .min(2, "Muito curto")
        .max(30, "Muito longo"),
    work_type: yup
        .string()
        .required("Informe tipo de trabalho")
        .min(2, "Muito curto")
        .max(30, "Muito longo"),
    description: yup
        .string()
        .required("Informe a descrição da vaga")
        .min(2, "Descrição muito curta")
        .max(1000, "Descrição muito longa"),
    requirements: yup
        .string()
        .required("Informe os requerimentos para a vaga")
        .min(2, "Descrição muito curta")
        .max(1000, "Descrição muito longa"),
    responsabilitys: yup
        .string()
        .required("Informe as responsabilidades do desenvolvedor")
        .min(2, "Descrição muito curta")
        .max(1000, "Descrição muito longa"),
});
