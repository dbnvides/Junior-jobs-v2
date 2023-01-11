import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CompanyPageContainer } from "./style";
import { CardCompany } from "../../components/CardCompany";
import { ModalViewer } from "../../components/ModalViewer";
import img from "../../assets/img/company.svg";
import { useContext } from "react";
import { ModalAddJob } from "../../components/ModalAddJob";
import { authContext } from "../../contexts/authContext";
import { CompanyContext } from "../../contexts/CompanyContext/companyContext";
import { useEffect } from "react";
import { api } from "../../services/api";
import iconExcluir from "../../assets/img/icon-excluir.svg";
import iconEditar from "../../assets/img/icon-editar.svg";
import iconVisualizar from "../../assets/img/icon-visu.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoadPage } from "../../components/Loading";

interface iUser {
  email: string;
  name: string;
  password: string;
  documentation: string;
  avatar: string | undefined;
  type: string;
  id: number;
  apply_jobs?: any;
}

interface iJobs {
  description: string;
  id: number;
  job_name: string;
  period: string;
  requirements: string;
  responsabilitys: string;
  usersId: number;
  work_type: string;
  candidates: iUser[];
}

export const Company = () => {
  const { isVisible, setVisible, loadingInModal, setEditProfileCompany, user } =
    useContext(authContext);
  const { modalViewer, setModalViewer, jobs, setJobViewer, setJobId } =
    useContext(CompanyContext);

  const navigate = useNavigate();

  if (user?.type === "Dev") {
    navigate("/user");
  }

  const deleteJob = async (job: iJobs) => {
    const token = localStorage.getItem("@TOKEN");

    console.log(job);

    if (!token) {
      return null;
    }
    try {
      const { data } = await api.delete(`jobs/${job.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Job deletado com sucesso !");
    } catch (error) {
      console.error(error);
    }
  };

  const openViewerJob = (job: iUser[]) => {
    setJobViewer(job);

    setModalViewer(true);
  };

  return (
    <>
      {isVisible ? <ModalAddJob /> : null}
      {modalViewer && <ModalViewer />}
      {loadingInModal ? <LoadPage /> : null}
      <Header />
      <CompanyPageContainer>
        <div className="perfil">
          <div className="boxImg">
            <img src={user?.avatar} alt="img" />
          </div>
          <div className="infPerfil">
            <div>
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
            </div>
            <button onClick={() => setEditProfileCompany(true)}>
              Editar Perfil
            </button>
          </div>
        </div>
        <div className="">
          <div className="boxTitle">
            <h1>Vagas</h1>
            <button onClick={() => setVisible(true)}>Adicionar Vagas</button>
          </div>
          <ul>
            {!!jobs.length &&
              jobs.map((element, index) => {
                return (
                  <CardCompany
                    period={element.period}
                    job_name={element.job_name}
                    work_type={element.work_type}
                    avatar={user?.avatar}
                    description={element.description}
                    requirements={element.requirements}
                    responsabilitys={element.responsabilitys}
                    id={element.id}
                    nameCompany={user?.name}
                    locality="Brasil"
                    key={index}
                  >
                    <button>
                      <img src={iconEditar} alt="Editar" />
                    </button>
                    <button onClick={() => deleteJob(element)}>
                      <img src={iconExcluir} alt="Excluir" />
                    </button>
                    <button
                      onClick={() => {
                        openViewerJob(element.candidates);
                        setJobId(element.id);
                      }}
                    >
                      <img src={iconVisualizar} alt="Visualizar" />
                    </button>
                  </CardCompany>
                );
              })}
          </ul>
        </div>
      </CompanyPageContainer>
      <StyledFooter />
    </>
  );
};
