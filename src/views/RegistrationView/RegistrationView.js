import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/authUser/authUserAsyncThunk';
import {FormHomePageStyled, LabelHomePageStyled, InputHomePageStyled} from "./RegistrationView.styled"


export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Page User Registration</h1>

      <FormHomePageStyled onSubmit={handleSubmit} autoComplete="off">
        <LabelHomePageStyled >
          Name
          <InputHomePageStyled type="text" name="name" value={name} onChange={handleChange} />
        </LabelHomePageStyled>

        <LabelHomePageStyled >
          Email
          <InputHomePageStyled
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LabelHomePageStyled>

        <LabelHomePageStyled >
          Password
          <InputHomePageStyled
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LabelHomePageStyled>

        <button type="submit">Registration</button>
      </FormHomePageStyled>
    </div>
  );
}
