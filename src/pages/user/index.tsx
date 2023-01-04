import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";

export const UserProfile = () => {
  return (
    <>
      <Header />
      <Container>
        <StyledMain>
          <section className="sectionProfile">
            <div className="avatarProfile">
              <FaUser />
            </div>
            <div className="contentProfile">
              <h2>Samuel Leão</h2>
              <p>Front-end Developer</p>
              <span>email@mail.com</span>
            </div>
            <button>Editar Perfil</button>
          </section>

          <section className="sectionJob">
            <h2>Vagas</h2>
            <ul></ul>
          </section>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
