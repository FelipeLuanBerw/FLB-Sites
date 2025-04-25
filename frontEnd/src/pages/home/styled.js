import styled from 'styled-components';
import * as colors from '../../config/colors';

export const DivOne = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .divTituloS1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tituloS1 {
    color: ${colors.oneColor};
    font-size: 3rem;
    letter-spacing: 6px;
    margin-bottom: 1.4rem;
  }

  .buttonS1 {
    font-size: 0.8rem;
    padding: 2.5vh 1.5vw;
    border-radius: 5px;
    color: ${colors.twoColor};
    background-color: ${colors.fourColor};
    letter-spacing: 3px;
    border: none;
    transition: 0.3s;
  }

  .buttonS1:hover {
    background-color: rgba(186, 186, 186, 0.95);
    color: ${colors.fourColor};
  }

  @media (max-width: 1000px) {
    .tituloS1 {
      text-align: center;
      max-width: 80%;
      margin-top: 30vh;
      font-size: 2rem;
      letter-spacing: 2px;
      margin-bottom: 5vh;
    }

    .buttonS1 {
      padding: 2vh 3vw;
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    .tituloS1 {
      text-align: center;
      max-width: 80%;
      margin-top: 30vh;
      font-size: 2rem;
      letter-spacing: 2px;
      margin-bottom: 5vh;
    }

    .buttonS1 {
      font-size: 0.7rem;
    }
  }
`;

export const DivTwo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${colors.twoColor};

  .divTituloS2 h1 {
    font-size: 4rem;
    letter-spacing: 3px;
    margin-top: 20%;
  }

  .divProdutos {
    margin-bottom: 15%;
    display: grid;
    gap: 6vw;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .divProduto {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 27vw;
  }
  .divProduto h2 {
    letter-spacing: 2px;
    font-size: 2.2rem;
    margin-bottom: 6vh;
    line-height: 5vh;
  }
  .divProduto p {
    font-size: 1.05rem;
    font-weight: 400;
    letter-spacing: 2px;
  }

  @media (max-width: 1000px) {
    padding: 2rem;

    .divTituloS2 h1 {
      font-size: 2.4rem;
      text-align: center;
      margin-top: 2vh;
    }

    .divProdutos {
      margin-top: 7vh;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .divProduto {
      max-width: 50vw;
    }

    .divProduto p {
      font-size: 0.9rem;
    }

    .divProduto h2 {
      font-size: 1.5rem;
      margin-bottom: 2vh;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem;
    .divTituloS2 h1 {
      font-size: 1.8rem;
      text-align: center;
      margin-top: 2vh;
    }

    .divProdutos {
      margin-top: 7vh;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .divProduto {
      max-width: 80vw;
    }

    .divProduto p {
      font-size: 0.9rem;
    }

    .divProduto h2 {
      font-size: 1.5rem;
      margin-bottom: 2vh;
    }
  }
`;

export const DivContato = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .contato {
    width: 75vw;
  }

  .contato h1 {
    text-align: center;
    margin-bottom: 10vh;
    margin-top: 12vh;
    font-size: 2.8rem;
    color: ${colors.threeColor};
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: flex-start;
  }

  .formDiv {
    max-width: 80vw;
    padding: 3rem;
    border-right: 1px solid #444;
  }

  form {
    display: flex;

    flex-direction: column;
    gap: 20px;
  }

  .labelContainer {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .labelContainerMessage {
    display: flex;
    flex-direction: column;
  }

  .label {
    margin-bottom: 1vh;
    color: ${colors.threeColor};
    font-size: 1.1rem;
  }

  .input-group {
    display: flex;
    gap: 20px;
  }

  .input-group input {
    flex: 1;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.15);
    color: ${colors.threeColor};
    border-radius: 5px;
    text-decoration: none;
  }

  textarea {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.15);
    color: ${colors.threeColor};
    resize: none;
    border-radius: 5px;
  }

  button {
    margin-top: 1vh;
    align-self: flex-end;
    padding: 12px 48px;
    background: ${colors.fourColor};
    color: ${colors.oneColor};
    border: none;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;
  }

  button:hover {
    background: rgba(26, 26, 26, 0.6);
  }

  .info-contato {
    margin-top: 8vh;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    color: #222;
  }

  .info-contato div {
    color: ${colors.threeColor};
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .iconDiv {
    display: flex;
    align-items: center;
  }

  .link {
    color: ${colors.threeColor};
  }

  .info-contato .emailIcon {
    width: 1.5rem;
    height: 1.1rem;
    margin-right: 0.5vw;
  }
  .info-contato .instagramIcon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5vw;
  }
  .info-contato .linkedinIcon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5vw;
  }

  @media (max-width: 768px) {
    .contato h1 {
      font-size: 2rem;
      margin: 5vh 0;
    }

    .container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .formDiv {
      border-right: none;
      padding: 1rem;
    }

    .labelContainer,
    .labelContainerMessage {
      width: 100%;
    }

    .input-group {
      flex-direction: column;
      gap: 10px;
    }

    .info-contato {
      margin-top: 5vh;
      gap: 20px;
    }

    .info-contato div {
      font-size: 1rem;
    }

    .input-group input,
    textarea {
      font-size: 1rem;
    }

    button {
      align-self: center;
    }
  }
`;
