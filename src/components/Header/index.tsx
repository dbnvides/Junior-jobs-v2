import { Container } from "../Container";
import { StyledHeader } from "./styled";
import Logo from "../../assets/img/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

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
              <img src={"userImage"} alt="Foto de perfil" />
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
