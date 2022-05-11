import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "redux/authUser/authUserSelector";
import {TitleHomePageStyled, ConteinerHomePageStyled, NavLinkHomeViewStyled} from "./HomeView.styled"

export default function HomeView () {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return(
    <ConteinerHomePageStyled >
    <TitleHomePageStyled >
        Welcom to your phonebook!{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </TitleHomePageStyled>

      {isLoggedIn ? <UserMenu/> : <>
      <NavLinkHomeViewStyled
        to="/register"
      >
        If you haven't registered yet, click here!
      </NavLinkHomeViewStyled>
      <NavLinkHomeViewStyled
        to="/login"
      >
        If you already have an account, click here!
      </NavLinkHomeViewStyled>
      </>}

  </ConteinerHomePageStyled>
  )
};

