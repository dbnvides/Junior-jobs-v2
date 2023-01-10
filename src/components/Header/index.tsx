import { Container } from "../Container";
import Logo from "../../assets/img/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { StyledHeader, StyledHeaderNoUser } from "./styled";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { MenuBox } from "../MenuBox";

export const Header = () => {
  const { user, loading, setUser } = useContext(authContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {loading ? null : user ? (
        <StyledHeader>
          <Container>
            <nav>
              <img src={Logo} alt="Júnior Jobs" />
              <div className="boxMenu">
                <div>
                  <AiOutlineUser />
                </div>
                <button onClick={() => logout()}>
                  <IoLogOutOutline />
                </button>
              </div>
              {/* <MenuBox /> */}
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
