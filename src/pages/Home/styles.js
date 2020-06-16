import styled from "styled-components";
import background from "../../assets/background-bs.png";

export const Container = styled.div`
  --dark-coffee-0: rgb(0, 0, 0);
  --dark-coffee-1: rgb(12, 13, 12);
  --dark-coffee-2: rgb(36, 38, 33);
  --dark-coffee-3: rgb(168, 158, 146);
  --dark-coffee-4: rgb(115, 94, 80);
  --dark-coffee-5: rgb(87, 45, 29);
  --silver3: rgb(89, 89, 89);
  --silver2: rgb(166, 166, 166);
  --silver1: rgb(242, 242, 242);
  --border: 5px;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .open-sidebar {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 40px;
    background-color: #242621;

    a {
      color: white;
      margin: 0 10px;
      font-size: 15px;
      padding: 5px 5px;
      border-radius: 6px;
    }
    a:hover {
      background-color: #735e50;
      color: black;
    }

    .on-user-button {
      background-color: #735e50;
      color: black;
    }
  }

  .close-sidebar {
    display: none;
  }

  .on-login-user {
    display: flex;
    align-items: center;
    margin-right: 10px;

    .cpf {
      height: 30px;
      max-width: 140px;
      color: var(--dark-coffee-5);
      font-size: 16px;
      font-weight: 700;
      padding: 3px 15px;
      border-radius: var(--border) 0 0 var(--border);
      border-right: solid;
      border-width: 2px;
    }

    .senha {
      height: 30px;
      max-width: 140px;
      color: var(--dark-coffee-5);
      font-size: 16px;
      font-weight: 700;
      padding: 3px 15px;
    }

    input:focus {
      color: var(--dark-coffee-5);
      font-weight: 700;
    }

    span {
      background-color: var(--silver2);
      width: 30px;
      height: 30px;
      border-radius: 0 var(--border) var(--border) 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span:hover {
      background-color: var(--dark-coffee-5);
    }
  }

  /* quando o user clica no botao de area do funcionario*/

  .off-login-user {
    display: none;
  }
`;

export const ModalBox = styled.div`

  .hide-modalbox {
    display: none; /* Hidden by default */
  }

  .show-modalbox {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

    /* Modal Content/Box */
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }

    a{
        
    }
  }
`;

export const Header = styled.div`
  overflow: hidden;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
  padding: 2px 20px;

  a {
    color: #a89e92;
  }

  h3 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    color: #a89e92;
    font-size: 24px;
  }

  .titulo {
    display: flex;
    align-items: center;
    color: #572d1d;

    img {
      margin-right: 10px;
      height: 55px;
    }
  }

  .superior-menu {
    display: flex;
    align-items: center;

    a {
      margin-left: 5px;
      padding: 8px;
      font-size: 15px;
      border-radius: 6px;
    }

    a:hover {
      background-color: #a89e92;
      color: black;
      cursor: pointer;
    }

    .buttom-header {
      display: flex;
      align-items: center;
      p {
        margin-left: 3px;
      }
    }

    .on-sidebar {
      background-color: #a89e92;
      color: black;
      cursor: pointer;
    }

    /* quando o cliente clica no botao de area de cliente*/
    .on-client-button {
      background-color: #a89e92;
      color: black;
    }

    .on-login-client {
      display: flex;
      align-items: center;
      margin-right: 10px;

      input {
        height: 30px;
        max-width: 140px;
        color: var(--dark-coffee-5);
        font-size: 16px;
        font-weight: 700;
        padding: 3px 15px;
        border-radius: var(--border) 0 0 var(--border);
      }

      input:focus {
        color: var(--dark-coffee-5);
        font-weight: 700;
      }

      span {
        background-color: var(--silver2);
        width: 30px;
        height: 30px;
        border-radius: 0 var(--border) var(--border) 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span:hover {
        background-color: var(--dark-coffee-5);
      }
    }

    .off-login-client {
      display: none;
    }
  }
`;

export const Feed = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin-top: 15px;

  #title-feed {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  #title-feed h3 {
    color: white;
    font-weight: 500;
  }

  #body-feed {
    width: 100%;
    height: 100%;
  }

  #body-feed span {
    text-align: center;
  }

  #body-feed .feed {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px 30px;
    margin-bottom: 10px;
    background-color: rgba(168, 158, 146, 0.8);
  }

  #body-feed .time {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 5px;
  }

  #body-feed .message {
    flex: 5;
    border-radius: 0 var(--border) var(--border) 0;
    font-size: 14px;
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 50px;
    flex: 1;
    background-color: var(--silver1);
  }

  .logos img {
    margin-top: 5px;
    margin-left: 15px;
  }

  .content {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${background});
    background-position: 0 -300px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content .content-div {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .content .content-div h3 {
    color: white;
    font-weight: 500;
  }

  .content .clock {
    margin-top: 40px;
  }

  .content .atualizacoes {
  }

  .content .slide {
  }

  .quadro-horario {
    justify-content: flex-start;
    margin-top: 30px;
    background-color: rgba(168, 158, 146, 0.8);
    border-radius: var(--border);
  }

  .horario {
    display: flex;
    align-self: center;
  }

  .dia,
  .situacao {
    width: 120px;
    padding: 4px 6px;
  }

  .situacao {
    font-weight: 500;
    text-align: end;
  }

  .dia {
    font-weight: 400;
  }

  .hoje {
    background-color: rgba(87,45,29,0.8);
  }

  .hoje:hover {
    background-color: rgba(87,45,29,1);
  }

  .depoimentos {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 160px;
    padding: 0 30px;
    background-color: #f2f2f2;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    h3 {
      color: #242621;
      margin-bottom: 15px;
      margin-bottom: 10px;
    }

    h4 {
      margin-top: 5px;
      font-size: 14px;
      color: #572d1d;
    }

    p {
      font-size: 14px;
      font-style: italic;
    }
  }

  .lista-depoimentos {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lista-depoimentos .depoimento {
    padding: 5px 20px;
  }
`;

export const SlideShow = styled.div`
  position: relative;
  margin: auto;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
  }

  /* Hide the images by default */
  .hide-image {
    display: none;
  }

  .show-image {
    display: inline-block;
  }

  /* Next & previous buttons */
  #prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: auto;
    cursor: pointer;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  #next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: auto;
    cursor: pointer;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 3px 0 0 3px;
    user-select: none;
  }

  #bar-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .numbertext {
    color: #242621;
    font-size: 14px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #a89e92;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  #prev:hover,
  #next:hover {
    background-color: #a89e92;
  }

  .active,
  .dot:hover {
    background-color: #572d1d;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 2s;
    animation-name: fade;
    animation-duration: 2s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  p {
    font-size: 7px;
    color: #a6a6a6;
    margin-right: 20px;
  }
  #contato {
    display: flex;
    align-items: center;
    color: white;
  }
`;
