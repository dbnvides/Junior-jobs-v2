import { Container } from "../Container";
import { StyledHeader } from "./styled";
import Logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <img src={Logo} alt="Júnior Jobs" />
          <ul>
            <li>Editar perfil</li>
            <li>
              <button>Sair</button>
            </li>
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
};
