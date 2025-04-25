import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{margin:0;
padding:0;
outline:none;
box-sizing:border-box;
}

h1, h2, h3, h4 {
  font-family: "New Tegomin", serif;
  font-weight: 600;
  font-style: normal;
}

p {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.new-tegomin {
  font-family: "New Tegomin", serif;
  font-style: normal;
}
.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

html, body, #root {
  height: 100%;
  width: 100%;
}

html {
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.Toastify__toast--success {
  background: ${colors.successColor};
  color: ${colors.whiteColor};

  @media (max-width: 768px) {
   max-width: 65vw;
   margin-top: 80px;
   margin-right: 5px;
  }
  @media (max-width: 480px) {
   max-width: 70vw;
   margin-top: 80px;
   margin-right: 2vw;
  }

}


.Toastify__toast--info {
  background: ${colors.infoColor};
  color: ${colors.whiteColor};
  border-radius: 5px;

  @media (max-width: 768px) {
   max-width: 65vw;
   margin-top: 80px;
   margin-right: 5px;
  }
  @media (max-width: 480px) {
   max-width: 70vw;
   margin-top: 80px;
   margin-right: 2vw;
  }

}



.Toastify__toast--error {
  background: ${colors.errorColor} !important;
  color: ${colors.whiteColor};

  @media (max-width: 768px) {
   max-width: 65vw;
   margin-top: 80px;
   margin-right: 5px;
  }
  @media (max-width: 480px) {
   max-width: 70vw;
   margin-top: 80px;
   margin-right: 2vw;
  }
}
`;

export const Container = styled.section``;

export const WhiteSection = styled.section`
  height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  padding: 80px;
`;

export const SectionOne = styled.section`
  background: url('/assets/img/Background1.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100vh;
  max-width: 100%;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 700px;
    padding: 8vh 0;
    background-position: top;

    @media (max-width: 480px) {
      padding: 5vh 0;
      background-size: cover;
      background-position: top center;
    }

    @media (max-height: 1000px) {
      height: auto;
    }
  }
`;
export const SectionTwo = styled.section`
  background: url('/assets/img/Background2.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  height: 100vh;
  max-width: 100%;

  @media (max-width: 1100px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 8vh 0;
    background-position: top;

    @media (max-width: 480px) {
      padding: 5vh 0;
      background-size: cover;
      background-position: top center;
    }
  }
`;

export const SectionThree = styled.section`
  background: url('/assets/img/Background3.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  height: 100vh;
  max-width: 100%;

  @media (max-width: 1100px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 8vh 0;
    background-position: top;

    @media (max-width: 480px) {
      padding: 5vh 0;
      background-size: cover;
      background-position: top center;
    }
  }
`;
