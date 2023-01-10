import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CompanyPageContainer } from "./style";
import { CardCompany } from "../../components/CardCompany";
import { ModalViewer } from "../../components/ModalViewer";
import img from "../../assets/img/company.svg";
import { useContext } from "react";
import { ModalAddJob } from "../../components/ModalAddJob";
import { authContext } from "../../contexts/authContext";

export const Company = () => {
    const { isVisible, setVisible } = useContext(authContext);

    return (
        <>
            {isVisible ? <ModalAddJob /> : null}
            <Header />
            <CompanyPageContainer>
                <div className="perfil">
                    <div className="boxImg">
                        <img src={img} alt="img" />
                    </div>
                    <div className="infPerfil">
                        <div>
                            <h2>Scoot</h2>
                            <p>scoot.com</p>
                        </div>
                        <button>Editar Perfil</button>
                    </div>
                </div>
                <div className="">
                    <div className="boxTitle">
                        <h1>Vagas</h1>
                        <button onClick={() => setVisible(true)}>
                            Adicionar Vagas
                        </button>
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
                    <button>
                      <img src={iconExcluir} alt="Excluir" />
                    </button>
                    <button
                      onClick={() => {
                        setViewerJob(element);
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

