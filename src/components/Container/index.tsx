import { StyledContainer } from "./styled";

interface IPropChildren {
  children: React.ReactNode;
}

export const Container = ({ children }: IPropChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};
