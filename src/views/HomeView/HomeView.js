import { NavLink } from "react-router-dom"
import {TitleHomePageStyled, ConteinerHomePageStyled} from "./HomeView.styled"

export default function HomeView () {
  return(
    <ConteinerHomePageStyled >
    <TitleHomePageStyled >
      Приветственная страница нашего сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>

      <NavLink
        to="/register"
      >
        If you haven't registered yet, click here!
      </NavLink>
      <NavLink
        to="/login"
      >
        If you already have an account, click here!
      </NavLink>

    </TitleHomePageStyled>
  </ConteinerHomePageStyled>
  )
};

