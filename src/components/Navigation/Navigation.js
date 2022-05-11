import { useSelector } from "react-redux";
import authSelectors from "redux/authUser/authUserSelector";
import {ConteinerLinkStyled, NavLinkStyled} from "./Navigation.styled";

export default function Navigation () {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return(
    <ConteinerLinkStyled>
      <NavLinkStyled to="/" >
        Home page
      </NavLinkStyled>

    {isLoggedIn &&
      <NavLinkStyled
        to="/contacts">
        Contacts
      </NavLinkStyled>}

    </ConteinerLinkStyled>
  )};
