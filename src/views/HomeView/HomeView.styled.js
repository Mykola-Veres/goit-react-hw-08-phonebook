import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ConteinerHomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);

`;

export const TitleHomePageStyled = styled.h1`
  font-weight: 700;
  /* font-size: 70; */
  text-align: center;
  margin-bottom: 40px;
  `;

export const NavLinkHomeViewStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 30;
  text-align: center;
  margin-bottom: 25px;
  padding: 5px;
  background-color: rgb(240, 270, 128);
  transform: scale(1);
  transition: transform 250ms linear;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.2);
    cursor: pointer;
  }`
