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
          <InputHomePageStyled
          type="text"
          name="name"
          value={name} onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </LabelHomePageStyled>

        <LabelHomePageStyled >
          Email
          <InputHomePageStyled
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@gmail.com"
            required
          />
        </LabelHomePageStyled>

        <LabelHomePageStyled >
          Password
          <InputHomePageStyled
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </LabelHomePageStyled>

        <button type="submit">Registration</button>
      </FormHomePageStyled>
    </div>
  );
}
