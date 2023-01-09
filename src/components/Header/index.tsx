import { Container } from "../Container";
import Logo from "../../assets/img/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { StyledHeader } from "./styled";
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
    <StyledHeader>
      <Container>
        <nav>
          {loading ? null : user ? (
            <>
              <img src={Logo} alt="Júnior Jobs" />

              <div className="boxMenu">
                <div>
                  <AiOutlineUser />
                </div>
                <button onClick={() => logout()}>
                  <IoLogOutOutline />
                </button>
              </div>
            </>
          ) : (
            <>
              <img src={Logo} alt="Júnior Jobs" />
            </>
          )}
        </nav>
      </Container>
    </StyledHeader>
  );
};
