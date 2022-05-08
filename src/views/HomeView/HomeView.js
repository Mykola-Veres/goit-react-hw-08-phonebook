import {TitleHomePageStyled, ConteinerHomePageStyled} from "./HomeView.styled"

export default function HomeView () {
  return(
    <ConteinerHomePageStyled >
    <TitleHomePageStyled >
      Приветственная страница нашего сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </TitleHomePageStyled>
  </ConteinerHomePageStyled>
  )
};

