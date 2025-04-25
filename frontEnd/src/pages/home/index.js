import React from 'react';
import { DivOne, DivTwo, DivContato } from './styled';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
} from '../../styles/GlobalStyles';
import 'aos/dist/aos.css';
import useContactForm from './hooks/useContactForms';

export default function Home() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <SectionOne id="inicio">
        <DivOne>
          <header className="divTituloS1">
            <h1 className="tituloS1">O melhor para sua empresa!</h1>
            <a href="#contato">
              <button
                className="buttonS1 new-tegomin"
                aria-label="Ir para a seção de contato"
              >
                Fale conosco
              </button>
            </a>
          </header>
        </DivOne>
      </SectionOne>

      <SectionTwo id="produtos">
        <DivTwo data-aos="fade-up">
          <header className="divTituloS2">
            <h1>Nossos Produtos</h1>
          </header>

          <div data-aos="fade-up" className="divProdutos">
            <article className="divProduto">
              <h2>Landing Pages</h2>
              <p>
                Páginas objetivas e estratégicas, criadas para gerar conversões
                e resultados imediatos em campanhas e lançamentos.
              </p>
            </article>
            <article className="divProduto">
              <h2>Site Institucional</h2>
              <p>
                Presença digital profissional com design moderno e conteúdo
                claro. Mostre sua empresa com credibilidade e estilo.
              </p>
            </article>
            <article className="divProduto">
              <h2>Loja Virtual</h2>
              <p>
                Venda online com segurança e praticidade. Lojas completas,
                responsivas e integradas aos principais meios de pagamento. (Em
                Breve!)
              </p>
            </article>
          </div>
        </DivTwo>
      </SectionTwo>

      <SectionThree id="contato">
        <DivContato data-aos="fade-up">
          <div className="contato">
            <h1>Entre em Contato</h1>

            <div className="container new-tegomin">
              <div className="formDiv">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <div className="labelContainer">
                      <label className="label" htmlFor="name">
                        Nome
                      </label>
                      <input
                        className="montserrat"
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        aria-label="Digite seu nome"
                      />
                    </div>

                    <div className="labelContainer">
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="montserrat"
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        aria-label="Digite seu email"
                      />
                    </div>
                  </div>

                  <div className="labelContainerMessage">
                    <label className="label" htmlFor="message">
                      Mensagem
                    </label>
                    <textarea
                      className="montserrat"
                      id="message"
                      rows="10"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      aria-label="Digite sua mensagem"
                    ></textarea>
                  </div>

                  <button
                    className="new-tegomin"
                    type="submit"
                    aria-label="Enviar mensagem"
                  >
                    Enviar
                  </button>
                </form>
              </div>

              <div className="info-contato">
                <div>
                  <div className="iconDiv">
                    <img
                      className="emailIcon"
                      src={'/assets/img/EmailIcon.png'}
                      alt="Ícone de email"
                    />
                    <p className="new-tegomin">Email:</p>
                  </div>
                  <p className="new-tegomin">felipeberwing@gmail.com</p>
                </div>
                <div>
                  <div className="iconDiv">
                    <img
                      className="instagramIcon"
                      src={'/assets/img/InstagramIcon.png'}
                      alt="Ícone do Instagram"
                    />
                    <p className="new-tegomin">Instagram:</p>
                  </div>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/felipe_berwing/"
                    aria-label="Abrir Instagram de Felipe Berwing"
                  >
                    @felipe_berwing
                  </a>
                </div>
                <div>
                  <div className="iconDiv">
                    <img
                      className="linkedinIcon"
                      src={'/assets/img/LinkedinIcon.png'}
                      alt="Ícone do LinkedIn"
                    />
                    <p className="new-tegomin">Linkedin:</p>
                  </div>
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/felipe-luan-berwing-36b751202/"
                    aria-label="Abrir LinkedIn de Felipe Berwing"
                  >
                    www.linkedin.com/in/felipe-luan-berwing-86b7b1202
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DivContato>
      </SectionThree>
    </>
  );
}
