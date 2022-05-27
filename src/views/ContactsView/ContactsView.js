import { ArticleConteiner } from './ContactsView.styled';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/ContactsFilter';
import ContactList from '../../components/ContactList';
import { useState } from 'react';
import { Typography } from '@mui/material';

export default function ContactsView() {
  const [filter, setFilter] = useState('');
  const handlerFilterName = e => {
    setFilter(e.target.value);
  };

  return (
    <ArticleConteiner>
      <ContactForm />
      <Typography component="h1" variant="h2">
        Contacts
      </Typography>
      <Filter value={filter} onChange={handlerFilterName} />
      <ContactList filter={filter} />
    </ArticleConteiner>
  );
}
