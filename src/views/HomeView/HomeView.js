import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/authUserSelector';
import {
  TitleHomePageStyled,
  ConteinerHomePageStyled,
  NavLinkHomeViewStyled,
} from './HomeView.styled';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ConteinerHomePageStyled>
      <Avatar sx={{ m: 0.5, bgcolor: 'secondary.main' }}>
        <MenuBookIcon />
      </Avatar>
      <TitleHomePageStyled>
        Welcom to your phonebook!{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </TitleHomePageStyled>

      {isLoggedIn ? (
        <>
          <NavLinkHomeViewStyled to="/contacts">
            Do you want to add a new contact to the phone book? Click here!
          </NavLinkHomeViewStyled>
          <UserMenu />
        </>
      ) : (
        <>
          <NavLinkHomeViewStyled to="/register">
            If you haven't registered yet, click here!
          </NavLinkHomeViewStyled>
          <NavLinkHomeViewStyled to="/login">
            If you already have an account, click here!
          </NavLinkHomeViewStyled>
        </>
      )}
    </ConteinerHomePageStyled>
  );
}
