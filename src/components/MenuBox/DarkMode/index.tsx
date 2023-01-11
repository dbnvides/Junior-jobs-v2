import { StyleDarkMode } from "./style";
import { useTheme } from "../../../contexts/DarkModeContext";

export const DarkModeContainer = () => {
  const { toggleTheme } = useTheme();

  return (
    <StyleDarkMode>
      <input type="checkbox" className="dm" id="dm" onChange={toggleTheme} />
      <label htmlFor="dm" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </StyleDarkMode>
  );
};
