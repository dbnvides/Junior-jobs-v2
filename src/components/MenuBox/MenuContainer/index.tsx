import { StyleMenuContainer } from "./style";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContainer } from "../DarkMode";

export const MenuContainer = () => {
  const { user, setUser } = useContext(authContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    setUser(null);
    navigate("/");
  };

  return (
    <StyleMenuContainer>
      <div className="imgContainer">
        <img src={user?.avatar} alt="" />
      </div>
      {user?.type !== "Company" ? (
        <>
          <Link to={"/home"}>Home</Link>
          <Link to={"/user"}>Perfil</Link>
        </>
      ) : (
        <Link to={"/company"}>Home</Link>
      )}
      <hr></hr>
      <button onClick={() => logout()}>
        <IoLogOutOutline />
      </button>
      <DarkModeContainer />
    </StyleMenuContainer>
  );
};
