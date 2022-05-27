import { useState } from 'react';
import {
  useGetContactsQuery,
  useCreateContactsMutation,
} from '../../redux/contactsAPI';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useCreateContactsMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerChangeName = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        throw new Error();
    }
  };

  const handlerSubmitUser = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    handlerSubmitUserForm(contact);
    resetName();
  };

  const handlerSubmitUserForm = contact => {
    contacts.some(
      contactItem =>
        contactItem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : addContact(contact);
  };

  const resetName = () => {
    setName('');
    setNumber('');
  };

  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 0.5, bgcolor: 'secondary.main' }}>
              <MenuBookIcon />
            </Avatar>
            <Typography component="h1" variant="h2">
              Phonebook
            </Typography>
            <Box component="form" onSubmit={handlerSubmitUser} sx={{ mt: 0.5 }}>
              <TextField
                type="text"
                value={name}
                onChange={handlerChangeName}
                margin="normal"
                required
                fullWidth
                id="outlined-name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                inputProps={{
                  inputMode: 'text',
                  pattern:
                    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                }}
                helperText="Name may contain only letters, apostrophe, dash and spaces"
              />
              <TextField
                value={number}
                onChange={handlerChangeName}
                margin="normal"
                required
                fullWidth
                name="number"
                label="Phone number"
                type="number"
                id="number"
                autoComplete="number"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                helperText="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                startIcon={<AddIcon />}
                size="large"
                color="success"
                sx={{ bgcolor: '#0278d1', mt: 3, mb: 4 }}
              >
                Add contact
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
