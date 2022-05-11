import { useDispatch, useSelector } from "react-redux";
import {ConteinerUserMenuStyled, TextUserMenuStyled} from "./UserMenu.styled";
import authSelectors from "redux/authUser/authUserSelector";
import operations from "redux/authUser/authUserAsyncThunk";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUserEmail);


  return (
    <ConteinerUserMenuStyled>
      <TextUserMenuStyled> Welcome: {name}, </TextUserMenuStyled>
      <TextUserMenuStyled> your email: {email} </TextUserMenuStyled>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Exit log-Out
      </button>
    </ConteinerUserMenuStyled>
  );
}
