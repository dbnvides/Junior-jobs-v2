import { Container } from "../Container";
import Logo from "../../assets/img/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { StyledHeader } from "./styled";

export const Header = () => {
  //Quando tiver o contexto e com dados user user como verificação
  const user = false;

  return (
    <StyledHeader>
      <Container>
        <nav>
          <img src={Logo} alt="Júnior Jobs" />

          <div className="boxMenu">
            {user ? (
              <img src={Logo} alt="Foto de perfil" />
            ) : (
              <>
                <div>
                  <AiOutlineUser />
                </div>
                <button>
                  <IoLogOutOutline />
                </button>
              </>
            )}
          </div>
        </nav>
      </Container>
    </StyledHeader>
  );
};
