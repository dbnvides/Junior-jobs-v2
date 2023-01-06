import { StyledMenu } from "./style";
import { MenuContainer } from "./MenuContainer";
import { useState } from "react";

export const MenuBox = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <StyledMenu>
        <label htmlFor="check" className="menuButton">
          <input
            onClick={() => {
              if (!openMenu) {
                setOpenMenu(true);
              } else {
                setOpenMenu(false);
              }
            }}
            id="check"
            type="checkbox"
          />
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bot"></span>
        </label>
        {openMenu ? <MenuContainer /> : null}
      </StyledMenu>
    </>
  );
};
