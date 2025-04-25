import React, { useState } from 'react';
import { Nav, Logo, Hamburger, NavLinks } from './styles';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src={'/assets/img/Logo.png'} />
      </Logo>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>&#9776;</Hamburger>
      <NavLinks className="new-tegomin" open={menuOpen}>
        <div className="links">
          <li>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#inicio">
              Início
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#produtos">
              Sobre
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#contato">
              Contato
            </a>
          </li>
        </div>
      </NavLinks>
    </Nav>
  );
}
