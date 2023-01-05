import { Container } from "../../components/Container";
import {
  StyledHome,
  StyledVacancy,
  StyledVacancyList,
  StyledViewMoreContainer,
} from "../../styles/home";
import test from "../../assets/img/logo.png";
import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <StyledHome>
        <Header />
        <Container>
          <StyledVacancyList>
            <StyledVacancy>
              <div>
                <img src={test} alt="" />
                <p>
                  5h atrás • <span>Integral</span>
                </p>
                <h2>Front-End Júnior</h2>
                <p>Scoot</p>
              </div>
              <h4>Recife</h4>
            </StyledVacancy>
            <StyledVacancy>
              <div>
                <img src={test} alt="" />
                <p>
                  5h atrás • <span>Integral</span>
                </p>
                <h2>Front-End Júnior</h2>
                <p>Scoot</p>
              </div>
              <h4>Recife</h4>
            </StyledVacancy>
            <StyledVacancy>
              <div>
                <img src={test} alt="" />
                <p>
                  5h atrás • <span>Integral</span>
                </p>
                <h2>Front-End Júnior</h2>
                <p>Scoot</p>
              </div>
              <h4>Recife</h4>
            </StyledVacancy>
          </StyledVacancyList>
        </Container>
        <StyledViewMoreContainer>
          <button>Carregar Mais</button>
        </StyledViewMoreContainer>
        <StyledFooter />
      </StyledHome>
    </>
  );
};
