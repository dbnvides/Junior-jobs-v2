import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CompanyPageContainer } from "./style";
import { CardCompany } from "../../components/CardCompany";
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
                </div>
            </CompanyPageContainer>
            <StyledFooter />
        </>
    );
};
