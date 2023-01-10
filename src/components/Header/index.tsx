import { Container } from "../Container";
import Logo from "../../assets/img/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { StyledHeader, StyledHeaderNoUser } from "./styled";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

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
                  {user.avatar ? (
                    <img className="imgProfile" src={user.avatar} alt="foto de perfil" />
                  ) : (
                    <AiOutlineUser />
                  )}
                </div>
                <button onClick={() => logout()}>
                  <IoLogOutOutline />
                </button>
              </div>
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
