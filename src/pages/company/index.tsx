import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CompanyPageContainer } from "./style";
import { CardCompany } from "../../components/CardCompany";
import img from "../../assets/img/company.svg";

export const Company = () => {
  return (
    <>
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
            <button> Adicionar Vagas</button>
          </div>
         
        </div>
      </CompanyPageContainer>
      <StyledFooter />
    </>
  );
};
