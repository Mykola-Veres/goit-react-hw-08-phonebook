import {TitleHomePageStyled, ConteinerHomePageStyled, NavLinkHomeViewStyled} from "./HomeView.styled"

export default function HomeView () {
  return(
    <ConteinerHomePageStyled >
    <TitleHomePageStyled >
        Welcom to your phonebook!{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </TitleHomePageStyled>
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


  </ConteinerHomePageStyled>
  )
};

