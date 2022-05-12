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
      <h1>User Login</h1>

      <FormUserViewStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelUserViewStyled >
          E-mail
          <InputUserViewStyled
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
          />
        </LabelUserViewStyled>

        <LabelUserViewStyled >
          Password
          <InputUserViewStyled
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </LabelUserViewStyled>

        <button type="submit">Log-in</button>
      </FormUserViewStyled>
    </div>
  );
}
