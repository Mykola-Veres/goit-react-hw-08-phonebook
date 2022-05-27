import { ContactsListItem } from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from '../../redux/contactsAPI';
import PropTypes from 'prop-types';
import authSelectors from 'redux/authUser/authUserSelector';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DetailsIcon from '@mui/icons-material/Details';
import UpdateIcon from '@mui/icons-material/Update';
import stringAvatar from '../../utils';
import Avatar from '@mui/material/Avatar';
import Copyright from 'CopyRights/CopyRights';
import Typography from '@mui/material/Typography';

const ContactItem = ({ filter }) => {
  const {
    data: contacts,
    isUninitialized,
    isFetching,
    refetch,
    isError,
  } = useGetContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  function filterVisibleContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const [deleteContact, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const showContacts =
    contacts && !isFetching && !isError && isLoggedIn && refetch;

  function verifyName(name) {
    if (name.split(' ').length < 2) {
      return `${name} ${name.split('').slice(1, 2).join()}`;
    }
    return name;
  }

  return (
    <>
      {showContacts && (
        <Button
          onClick={refetch}
          disabled={isUninitialized}
          variant="outlined"
          startIcon={<UpdateIcon />}
          color="warning"
          sx={{ bgcolor: '#0288d1', mb: 2, mt: 1 }}
        >
          REFETCH CONTACTS
        </Button>
      )}

      {showContacts &&
        filterVisibleContacts().map(contact => (
          <ContactsListItem key={contact.id}>
            <Avatar {...stringAvatar(verifyName(contact.name))} />
            <Typography
              sx={{ ml: 0.4, mr: 0.4 }}
              variant="h6"
              color="text.primary"
              align="justify"
            >
              {contact.name}:
            </Typography>
            <Typography
              sx={{ mr: 0.4 }}
              variant="h6"
              color="text.primary"
              align="center"
            >
              {contact.number}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                sx={{ bgcolor: '#0288d1' }}
              >
                EDIT
              </Button>
              <Button
                variant="contained"
                startIcon={<DetailsIcon />}
                sx={{ bgcolor: '#0288d1' }}
              >
                DETEILS
              </Button>
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="error"
                onClick={() => deleteContact(contact.id)}
                disabled={isUninitialized}
                type="submit"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </Button>
            </Stack>
          </ContactsListItem>
        ))}
      <Copyright></Copyright>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  filter: PropTypes.string.isRequired,
};
