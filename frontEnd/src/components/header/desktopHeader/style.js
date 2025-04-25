import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
  z-index: 10;
  box-sizing: border-box;

  .nav-left,
  .nav-center,
  .nav-right {
    width: 33.33%;
    display: flex;
    align-items: center;
  }

  .nav-left {
    justify-content: flex-start;
  }

  .nav-center {
    justify-content: center;
  }

  .nav-right {
    justify-content: flex-end;
  }

  .logoImg {
    max-width: 4rem;
    height: auto;
  }

  .ulLinks {
    display: flex;
    gap: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .link {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    letter-spacing: 1px;
    transition: 0.3s;
  }

  .link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    .ulLinks {
      gap: 20px;
    }

    .link {
      font-size: 16px;
      padding: 8px 12px;
    }

    .logoImg {
      max-width: 3.2rem;
    }
  }
`;
