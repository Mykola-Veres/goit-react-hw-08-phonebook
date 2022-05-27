import styled from 'styled-components';

export const ContactsListBtn = styled.button`
  background-color: white;
  border: 2px solid red;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ContactsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(117, 190, 218, 0.7);
  background-color: rgba(117, 190, 218, 0.4);
  border-radius: 8px;
  font-size: 14px;
  :not(:last-child) {
    margin-bottom: 12px;
  }
  padding: 10px;
  @media (min-width: 920px) {
    width: 900px;
  }
`;
