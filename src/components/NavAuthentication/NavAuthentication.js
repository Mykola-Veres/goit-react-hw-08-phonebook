import {NavLinkStyled, ConteinerLinkStyled} from "./NavAuthentication.styled"

export default function NavAuthentication() {
  return (
    <ConteinerLinkStyled>
      <NavLinkStyled
        to="/register"
      >
        Registration
      </NavLinkStyled>
      <NavLinkStyled
        to="/login"
      >
        Login
      </NavLinkStyled>
    </ConteinerLinkStyled>
  );
}
