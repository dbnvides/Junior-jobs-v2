import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CompanyPageContainer } from "./style";
import { CardCompany } from "../../components/CardCompany";

export const Company = () => {
  return (
    <>
      <Header />
      <CompanyPageContainer>
        <div></div>
        <div className="">
          <div className="boxTitle">
            <h1>Vagas</h1>
            <button> Adicionar Vagas</button>
          </div>
          <CardCompany />
        </div>
      </CompanyPageContainer>
      <StyledFooter />
    </>
  );
};
