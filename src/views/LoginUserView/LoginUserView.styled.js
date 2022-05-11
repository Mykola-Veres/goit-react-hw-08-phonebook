import styled from 'styled-components';

export const FormUserViewStyled = styled.form`
  max-width: 620;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: calc(100vh - 50px); */
`;

export const LabelUserViewStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15;
  /* max-width: 420; */
`;

export const InputUserViewStyled = styled.input`
 display: block;
    padding: 5px;
    border: 2px solid black;
    border-radius: 6px;
    width: 100%;
    margin-bottom: 15;
`;
