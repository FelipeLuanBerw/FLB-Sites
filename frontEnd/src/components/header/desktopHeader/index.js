import React from 'react';
import { Nav } from './style';

export default function Header() {
  return (
    <>
      <Nav className="Nav">
        <div className="nav-left">
          <img className="logoImg" src={'/assets/img/Logo.png'} alt="Logo" />
        </div>{' '}
        <div className="nav-center">
          <ul className="ulLinks">
            <li>
              <a className="link montserrat" href="#inicio">
                Início
              </a>
            </li>
            <li>
              <a className="link montserrat" href="#produtos">
                Produtos
              </a>
            </li>
            <li>
              <a className="link montserrat" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right"></div>
      </Nav>
    </>
  );
}
