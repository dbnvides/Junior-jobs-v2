import React, { useContext } from "react";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { StyledModalEditJob } from "./styles";
import { iFormSchemaModalEditJob } from "./types";
import { formSchema } from "./editJobSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { authContext } from "../../contexts/authContext";
import { CompanyContext } from "../../contexts/CompanyContext/companyContext";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export interface iEditJob {
  userId?: number;
  job_name?: string;
  period?: string;
  work_type?: string;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  candidate?: [];
}

export const ModalEditJob = () => {
  const { setLoadingInModal, setEditJobModal } = useContext(authContext);
  const { jobEdit, setLoading } = useContext(CompanyContext);

  const editJob = async (data: iEditJob, id: number | undefined) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.patch<iEditJob>(`jobs/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success("Vaga alterada com sucesso");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iFormSchemaModalEditJob>({
    mode: "onChange",
    resolver: yupResolver(formSchema),
    defaultValues: {
      job_name: jobEdit?.job_name,
      locality: jobEdit?.locality,
      period: jobEdit?.period,
      work_type: jobEdit?.work_type,
      description: jobEdit?.description,
      requirements: jobEdit?.requirements,
      responsabilitys: jobEdit?.responsabilitys,
    },
  });

  const onSubmitFunction: SubmitHandler<iFormSchemaModalEditJob> = async (
    data
  ) => {
    setLoadingInModal(true);
    editJob(data, jobEdit?.id);
    setEditJobModal(false);
    setLoadingInModal(false);
  };

  return (
    <StyledModalEditJob>
      <div className="modalEditJobContainer">
        <h3 className="modalEditJobTitle">Editar vaga</h3>
        <button
          className="closeModalEditJobButton"
          onClick={() => setEditJobModal(false)}
        >
          X
        </button>
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Título"
            type="text"
            placeholder="Digite o título da vaga"
            {...register("job_name")}
          />
          {errors.job_name && (
            <span className="errorMessage">{errors.job_name.message}</span>
          )}
          <Input
            label="Localização"
            type="text"
            placeholder="Informe a cidade/estado/país em que a vaga está disponível"
            {...register("locality")}
          />
          {errors.locality && (
            <span className="errorMessage">{errors.locality.message}</span>
          )}
          <label htmlFor="period" className="labelEditJobModal">
            Período
          </label>
          <select
            id="period"
            className="selectEditJobModal"
            {...register("period")}
          >
            <option value="" hidden>
              Informe o período de trabalho
            </option>
            <option value="Integral">Integral</option>
            <option value="Meio Período">Meio Período</option>
          </select>
          {errors.period && (
            <span className="errorMessage">{errors.period.message}</span>
          )}
          <label htmlFor="work_type" className="labelAddJobModal">
            Tipo de trabalho
          </label>
          <select
            id="work_type"
            className="selectEditJobModal"
            {...register("work_type")}
          >
            <option value="" hidden>
              Informe o tipo de trabalho
            </option>
            <option value="Presencial">Presencial</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Home Office">Home Office</option>
          </select>
          {errors.work_type && (
            <span className="errorMessage">{errors.work_type.message}</span>
          )}
          <Textarea
            label="Descrição"
            placeholder="Informe a descrição da vaga"
            id="jobDescription"
            {...register("description")}
          />
          {errors.description && (
            <span className="errorMessage">{errors.description.message}</span>
          )}
          <Textarea
            label="Requerimentos"
            placeholder="Liste os requerimentos para a vaga"
            id="jobRequirements"
            {...register("requirements")}
          />
          {errors.requirements && (
            <span className="errorMessage">{errors.requirements.message}</span>
          )}
          <Textarea
            label="Papel do desenvolvedor"
            placeholder="Descreva as atividades que o desenvolvedor vai desempenhar"
            id="responsabilitys"
            {...register("responsabilitys")}
          />
          {errors.responsabilitys && (
            <span className="errorMessage">
              {errors.responsabilitys.message}
            </span>
          )}
          <button
            className="editJobButton"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Alterar vaga
          </button>
        </form>
      </div>
    </StyledModalEditJob>
  );
};
