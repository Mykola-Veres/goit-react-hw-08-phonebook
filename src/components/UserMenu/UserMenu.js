import { useDispatch, useSelector } from "react-redux";
import {ConteinerUserMenuStyled, TextUserMenuStyled} from "./UserMenu.styled";
import authSelectors from "redux/authUser/authUserSelector";
import operations from "redux/authUser/authUserAsyncThunk";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUserEmail);
  // const avatar = defaultAvatar;

  return (
    <ConteinerUserMenuStyled>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <TextUserMenuStyled> Добро пожаловать, {name}, почта пользователя: {email} </TextUserMenuStyled>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </ConteinerUserMenuStyled>
  );
}
