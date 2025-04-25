import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 6vw;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 10;

  img {
    width: 15vw;
  }
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  color: ${colors.oneColor};
  font-size: 2rem;
  cursor: pointer;
  display: block;
  z-index: 10;

  @media (min-width: 480px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.fourColor};
  width: 100vw;
  height: 3000px;
  text-align: center;
  gap: 1rem;
  z-index: 5;

  .links {
    margin-top: 30vh;
  }

  li {
    padding: 1rem 0;
    margin-bottom: 5vh;
  }

  a {
    color: ${colors.oneColor};
    text-decoration: none;
    font-size: 1.2rem;
  }
`;
