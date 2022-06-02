import { useState } from 'react';
import { ContactsForm, ContactsFormBtn } from './EditContact.styled';
import {
  useGetContactsQuery,
  useUpdateContactsMutation,
} from '../../redux/contactsAPI';

export default function EditContact({
  contactId,
  initialName = '',
  initialNumber = '',
}) {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useUpdateContactsMutation();

  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);

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
      contactId,
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

  return (
    <ContactsForm onSubmit={handlerSubmitUser}>
      <label>
        Edit Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handlerChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Edit Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handlerChangeName}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <ContactsFormBtn type="submit">Edit contact</ContactsFormBtn>
    </ContactsForm>
  );
}
