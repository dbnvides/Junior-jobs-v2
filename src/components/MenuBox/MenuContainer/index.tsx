import { StyleMenuContainer } from "./style";
import Logo from "../../../assets/img/logo.png";
import { useContext } from "react";
import { authContext } from "../../../contexts/authContext";

import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContainer } from "../DarkMode";

export const MenuContainer = () => {
  const { user, setUser } = useContext(authContext);
  const navigate = useNavigate();
  console.log(user);
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
      <Link to={"/home"}>Home</Link>
      <Link to={"/user"}>Perfil</Link>
      <hr></hr>
      <button onClick={() => logout()}>
        <IoLogOutOutline />
      </button>
      <DarkModeContainer />
    </StyleMenuContainer>
  );
};
