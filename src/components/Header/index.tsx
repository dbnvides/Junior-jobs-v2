import { Container } from "../Container";
import Logo from "../../assets/img/logo.png";
import { StyledHeader, StyledHeaderNoUser } from "./styled";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import { MenuBox } from "../MenuBox";

export const Header = () => {
  const { user, loading } = useContext(authContext);

  return (
    <>
      {loading ? null : user ? (
        <StyledHeader>
          <Container>
            <nav>
              <img src={Logo} alt="Júnior Jobs" className="logo" />
              <MenuBox />
            </nav>
          </Container>
        </StyledHeader>
      ) : (
        <>
          <StyledHeaderNoUser>
            <Container>
              <nav>
                <img src={Logo} alt="Júnior Jobs" />
              </nav>
            </Container>
          </StyledHeaderNoUser>
        </>
      )}
    </>
  );
};
