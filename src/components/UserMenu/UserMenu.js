import { useDispatch, useSelector } from 'react-redux';
import { ConteinerUserMenuStyled, TextUserMenuStyled } from './UserMenu.styled';
import authSelectors from 'redux/authUser/authUserSelector';
import operations from 'redux/authUser/authUserAsyncThunk';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <ConteinerUserMenuStyled>
      <TextUserMenuStyled> Welcome: {name}, </TextUserMenuStyled>
      <TextUserMenuStyled> your email: {email} </TextUserMenuStyled>

      <Button
        variant="contained"
        type="button"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(operations.logOut())}
        sx={{ bgcolor: '#0288d1' }}
      >
        EXIT log-Out
      </Button>
    </ConteinerUserMenuStyled>
  );
}
