
import {ConteinerLinkStyled, NavLinkStyled} from "./Navigation.styled"


export default function Navigation () {return(
  <ConteinerLinkStyled>
    <NavLinkStyled to="/" >
      Home page
    </NavLinkStyled>

    <NavLinkStyled
      to="/contacts" >
      Contacts
    </NavLinkStyled>
  </ConteinerLinkStyled>)};
