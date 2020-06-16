import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,50%);

  .message{
      display: flex;
      align-items:center;

    p{
        margin-left: 15px;
        font-size: 20px;
        font-weight: 700;

    }

    span{
        display: flex;
        align-items: center;
        padding:0;
        margin:0;
        color: #242621;
        -webkit-animation:spin 8s linear infinite;
        -moz-animation:spin 8s linear infinite;
        animation:spin 8s linear infinite;
    }
  }

    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); }

  
`;
