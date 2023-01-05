import { Container } from "../Container";
import { FilterBar, StyledHeader } from "./styled";
import Logo from "../../assets/img/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import searchIcon from "../../assets/img/search-icon.png";
import localizationIcon from "../../assets/img/localization-icon.png";
import funnelIcon from "../../assets/img/funnel-icon.png";

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
        <FilterBar>
          <div className="filterTitle">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Filtrar por título..." />
          </div>
          <div className="filterLocal">
            <img src={localizationIcon} alt="" />
            <input type="text" placeholder="Filtrar por localidade..." />
          </div>
          <div className="searchContainer">
            <div>
              <label>
                <input type="checkbox" />
                Apenas Integral
              </label>
            </div>
            <img src={funnelIcon} alt="" />
            <button className="mobileSearch">
              <img src={searchIcon} alt="" />
            </button>
            <button>Procurar</button>
          </div>
        </FilterBar>
      </Container>
    </StyledHeader>
  );
};
