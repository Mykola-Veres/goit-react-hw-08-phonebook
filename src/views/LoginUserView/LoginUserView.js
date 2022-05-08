import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  operations from '../../redux/authUser/authUserAsyncThunk';
import { FormUserViewStyled, LabelUserViewStyled, InputUserViewStyled} from "./LoginUserView.styled";


export default function LoginUserView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <FormUserViewStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelUserViewStyled >
          Почта
          <InputUserViewStyled
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LabelUserViewStyled>

        <LabelUserViewStyled >
          Пароль
          <InputUserViewStyled
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LabelUserViewStyled>

        <button type="submit">Войти</button>
      </FormUserViewStyled>
    </div>
  );
}
