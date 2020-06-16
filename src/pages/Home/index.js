import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Main,
  Header,
  Footer,
  SlideShow,
  Feed,
  ModalBox,
} from "./styles";

import logo from "../../assets/logo.svg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FiMapPin, FiMail } from "react-icons/fi";
import { BsJustify } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";

function Home() {
  // state do slide image
  const [idShowImage, setIdShowImage] = useState(1);
  // dia da semana
  const [day] = useState(new Date().getDay());
  // state do sidebar
  const [modeSidebar, setModeSidebar] = useState("close-sidebar");
  // state do login user
  const [loginUser, setLoginUser] = useState("off-login-user");
  // state do login client
  const [loginClient, setLoginClient] = useState("off-login-client");
  // state of modal Box
  const [modalBox, setModalBox] = useState("hide-modalbox");

  const history = useHistory();

  const prevImage = () => {
    if (idShowImage <= 1) {
      setIdShowImage(5);
    } else {
      setIdShowImage(idShowImage - 1);
    }
  };

  const nextImage = () => {
    if (idShowImage >= 5) {
      setIdShowImage(1);
    } else {
      setIdShowImage(idShowImage + 1);
    }
    console.log(idShowImage);
  };

  const goToImage = (id) => {
    setIdShowImage(id);
  };

  useEffect(() => {
    setTimeout(nextImage, 8000);
    return () => {};
  });

  const sidebar = () => {
    if (modeSidebar === "open-sidebar") {
      setModeSidebar("close-sidebar");
    } else {
      setModeSidebar("open-sidebar");
    }
    setLoginUser("off-login-user");
  };

  const client = () => {
    if (loginClient === "off-login-client") {
      setLoginClient("on-login-client");
    } else {
      setLoginClient("off-login-client");
    }
  };

  const user = () => {
    if (loginUser === "off-login-user") {
      setLoginUser("on-login-user");
    } else {
      
    }
  };

  const modalbox = () => {
    if (modalBox === "hide-modalbox") {
      setModalBox("show-modalbox");
    } else {
      setModalBox("hide-modalbox");
      setModeSidebar("close-sidebar");
    }
  };

  return (
    <Container>
      <Header>
        <div className="titulo">
          <img src={logo}></img>
          <h3>BS Celulares</h3>
        </div>
        <div className="superior-menu">
          <div className={loginClient}>
            <input type="text" placeholder="Digite seu CPF ..."></input>
            <span>
              <GrLinkNext size={20} />
            </span>
          </div>
          <a
            className={`buttom-header ${
              loginClient === "on-login-client" ? "on-client-button" : ""
            }`}
            onClick={client}
          >
            Área do Cliente
          </a>
          <a
            className="buttom-header"
            href="https://api.whatsapp.com/send?phone=5531973592931&text="
          >
            <AiOutlineWhatsApp size={20} />
            <p>WhatsApp</p>
          </a>
          <a
            className="buttom-header"
            href="https://www.facebook.com/pages/Bs-Celulares-Assist%C3%AAncia-T%C3%A9cnica/309637423008978"
          >
            <AiFillFacebook size={20} />
            <p>Facebook</p>
          </a>
          <a
            className="buttom-header"
            href="https://www.instagram.com/bs_celulares/?hl=pt-br"
          >
            <AiOutlineInstagram size={20} />
            <p>Instagram</p>
          </a>
          <a
            className="buttom-header"
            href="https://www.google.com/maps/dir//BS+celulares+assist%C3%AAncia+t%C3%A9cnica/data=!4m8!4m7!1m0!1m5!1m1!1s0xa6c13e33db0a93:0x9dbf63ada1e73672!2m2!1d-44.100808099999995!2d-19.945083"
          >
            <FiMapPin size={20} />
            <p>Localização</p>
          </a>
          <a
            onClick={sidebar}
            className={`${modeSidebar === "open-sidebar" ? "on-sidebar" : ""}`}
            id="sidebar"
          >
            <BsJustify size={30} />
          </a>
        </div>
      </Header>
      <div className={modeSidebar}>
        <div className={loginUser}>
          <input type="text" className="cpf" placeholder="CPF"></input>
          <input type="password" className="senha" placeholder="Senha"></input>
          <span>
            <GrLinkNext size={20} />
          </span>
        </div>
        <a
          className={`${loginUser === "on-login-user" ? "on-user-button" : ""}`}
          onClick={user}
        >
          Área do Funcionário
        </a>
        <a onClick={modalbox}>Sobre a BS Celulares</a>
      </div>

      <ModalBox>
        <div className={modalBox}>
          <div class="modal-content">
            <span class="close" onClick={modalbox}>
              &times;
            </span>
            <p>  A BS Celulares atua no segmento de telefonia móvel celular,
              oferecendo serviços de assistência técnica especializada em
              manutenção de celulares e tablets. A qualidade de serviço, preço
              justo e entrega rápida são os principais focos da empresa, que
              atua no mercado a 2 anos, e segue ganhando cada vez mais
              notoriedade e clientela. Além de oferecer qualidade nos serviços
              em assistência técnica, a BS Celulares também atua no ramo de
              confecção de canecas personalizadas, onde o cliente tem liberdade
              de escolher a figura da caneca e entre outras caracteristicas. A
              loja fisica oferece várias opções de acessórios personalizados
              para smartphones, além de artigos de informática. Todo esse
              conjunto de serviços destaca a versatilidade da BS Celulares.</p>
          </div>
        </div>
      </ModalBox>

      <Main>
        {/*<div className="logos">
          <img src={samsung} alt="Samsung" width="55" height="20" />
          <img src={motorola} alt="Motorola" width="45" height="30" />
          <img src={xiaomi} alt="xiaomi" width="40" height="40" />
          <img src={lg} alt="lg" width="45" height="20" />
          <img src={apple} alt="apple" width="25" height="25" />
          <img src={asus} alt="asus" width="55" height="20" />
          </div>*/}
        <div className="content">
          <div className="content-div clock">
            <h3>Horário de Funcionamento</h3>
            <div className="quadro-horario">
              <div className={`${day == 0 ? "hoje" : ""} horario `}>
                <span className="dia">Domingo</span>
                <span className="situacao">Fechado</span>
              </div>
              <div className={`${day == 1 ? "hoje" : ""} horario `}>
                <span className="dia">Segunda-Feira</span>
                <span className="situacao">09:00 as 19:00</span>
              </div>
              <div className={`${day == 2 ? "hoje" : ""} horario `}>
                <span className="dia">Terça-Feira</span>
                <span className="situacao">09:00 as 19:00</span>
              </div>
              <div className={`${day == 3 ? "hoje" : ""} horario `}>
                <span className="dia">Quarta-Feira</span>
                <span className="situacao">09:00 as 19:00</span>
              </div>
              <div className={`${day == 4 ? "hoje" : ""} horario `}>
                <span className="dia">Quinta-Feira</span>
                <span className="situacao">09:00 as 19:00</span>
              </div>
              <div className={`${day == 5 ? "hoje" : ""} horario `}>
                <span className="dia">Sexta-Feira</span>
                <span className="situacao">09:00 as 19:00</span>
              </div>
              <div className={`${day == 6 ? "hoje" : ""} horario `}>
                <span className="dia">Sábado</span>
                <span className="situacao">09:00 as 14:00</span>
              </div>
            </div>
          </div>

          <div className="content-div atualizacoes">
            <Feed>
              <div id="title-feed">
                <h3>Feed de Atualizações</h3>
              </div>
              <div id="body-feed">
                <div className="feed">
                  <span className="time"> 02/06/2020 </span>
                  <span className="message">
                    Feriado! Não estaremos operando. Amanha voltamos
                    normalmente!
                  </span>
                </div>
                <div className="feed">
                  <span className="time"> 24/05/2020 </span>
                  <span className="message">
                    Estamos atendendo na porta. Venha com mascara!{" "}
                  </span>
                </div>
                <div className="feed">
                  <span className="time"> 14/05/2020 </span>
                  <span className="message">Novas capinhas na loja!</span>
                </div>
                <div className="feed">
                  <span className="time"> 05/05/2020 </span>
                  <span className="message"> Loja com Canecas Novas</span>
                </div>
                <div className="feed">
                  <span className="time"> 20/04/2020 </span>
                  <span className="message">Amanha não abriremos</span>
                </div>
                <div className="feed">
                  <span className="time"> 14/04/2020 </span>
                  <span className="message">Sorteio hoje !!!</span>
                </div>
              </div>
            </Feed>
          </div>

          <div className="content-div slide">
            <SlideShow>
              <div
                className={`fade ${
                  idShowImage === 1 ? "show-image" : "hide-image "
                }`}
              >
                <div className="numbertext">1 / 5</div>
                <img src={img1}></img>
              </div>

              <div
                className={`fade ${
                  idShowImage === 2 ? "show-image" : "hide-image "
                }`}
              >
                <div className="numbertext">2 / 5</div>
                <img src={img2}></img>
              </div>

              <div
                className={`fade ${
                  idShowImage === 3 ? "show-image" : "hide-image "
                }`}
              >
                <div className="numbertext">3 / 5</div>
                <img src={img3}></img>
              </div>

              <div
                className={`fade ${
                  idShowImage === 4 ? "show-image" : "hide-image "
                }`}
              >
                <div className="numbertext">4 / 5</div>
                <img src={img4}></img>
              </div>

              <div
                className={`fade ${
                  idShowImage === 5 ? "show-image" : "hide-image "
                }`}
              >
                <div className="numbertext">5 / 5</div>
                <img src={img5}></img>
              </div>

              <a id="prev" onClick={prevImage}>
                &#10094;
              </a>
              <a id="next" onClick={nextImage}>
                &#10095;
              </a>

              <div id="bar-dots">
                <span
                  className={`dot ${idShowImage === 1 ? "active" : ""}`}
                  onClick={() => goToImage(1)}
                ></span>
                <span
                  className={`dot ${idShowImage === 2 ? "active" : ""}`}
                  onClick={() => goToImage(2)}
                ></span>
                <span
                  className={`dot ${idShowImage === 3 ? "active" : ""}`}
                  onClick={() => goToImage(3)}
                ></span>
                <span
                  className={`dot ${idShowImage === 4 ? "active" : ""}`}
                  onClick={() => goToImage(4)}
                ></span>
                <span
                  className={`dot ${idShowImage === 5 ? "active" : ""}`}
                  onClick={() => goToImage(5)}
                ></span>
              </div>
            </SlideShow>
          </div>
        </div>

        <div className="depoimentos">
          <h3>Depoimentos</h3>

          <div className="lista-depoimentos">
            <div className="depoimento">
              <p>
                "Levei meu telefone que tinha caído na água e não ligava. Peguei
                no mesmo dia e funcionando normalmente. Muito bom trabalho e
                ótimo atendimento. Obrigada."
              </p>
              <h4>- Lilian Carvalho</h4>
            </div>

            <div className="depoimento">
              <p>
                "Se quiser uma assistência rápida, eficiente e entrega rápida do
                aparelho aqui é o lugar. Tem acessórios, películas, capinhas de
                celular e outras variedades. O legal é que conserta tablet
                tambem, e o preço é mais em conta."
              </p>
              <h4>- Andressa Sampaio</h4>
            </div>

            <div className="depoimento">
              <p>
                "Ótimo atendimento, e excelente profissional. Soube resolver o
                meu problema com meu smartphone!! Super recomendo!"
              </p>
              <h4>- Oziel Igor</h4>
            </div>

            <div className="depoimento">
              <p>
                "Mandei trocar a bateria do meu aparelho e peguei no mesmo dia.
                Sensacional. Com preço justo. Recomendo muito!"
              </p>
              <h4>- Afonso Gomes</h4>
            </div>
          </div>
        </div>
      </Main>

      <Footer>
        <p>Desenvolvido por Pedro Jesus</p>
        <div id="contato">
          <FiMail size={13} />
          <p style={{ marginLeft: "3px" }}>pedrohcordeiroj@gmail.com</p>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;
