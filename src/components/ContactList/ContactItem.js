import { ContactsListBtn, ContactsListItem } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactsMutation } from '../../redux/contactsAPI';
import PropTypes from 'prop-types';
import authSelectors from 'redux/authUser/authUserSelector';
import { useSelector } from 'react-redux';

const ContactItem = ({filter}) => {
  const { data: contacts, isUninitialized, isFetching, refetch, isError
  } = useGetContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  function filterVisibleContacts () {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))}

  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactsMutation();

  const showContacts = contacts && !isFetching && !isError && isLoggedIn && refetch;

  // useEffect(() => {dispatch(contactsOperations.fetchContacts());}, [dispatch]);

    return (<>
    <button onClick={refetch} disabled={isUninitialized}> REFETCH </button>
    {showContacts && filterVisibleContacts().map(contact => (
    <ContactsListItem key={contact.id}>
      {contact.name}: {contact.number}
      <ContactsListBtn disabled={isUninitialized}
      onClick={() => deleteContact(contact.id)}
      >{isDeleting ? "deleting..." : "Delete"}
      </ContactsListBtn>
    </ContactsListItem>
  ))}
    </>)}

export default ContactItem;

ContactItem.propTypes = {
  filter: PropTypes.string.isRequired,
};
