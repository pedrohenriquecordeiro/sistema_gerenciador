import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { Container } from './styles';

function Register() {

  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  function register() {

    if (password1 !== password2) return null;
    /* problema com check*/
    if (cpf === '' || password1 === '' || name === '' ) return null;

    axios.put('http://localhost:8080/add_user', {
      cpf: cpf,
      password: password1,
      name: name
    })
    .then(function (response) {
      if(response.data.sucess) {
        alert("Sua solicitação de cadastro foi enviada ao Gerente!")
      }
    })
    .catch(function (error) {
      alert("Ocorreu um erro, tente novamente! Se persistir o erro contate o administrador do Sistema!")
    });


  }

  return (
    <>
      <Container>
        <input type="text" placeholder="Nome"
          onChange={event => setCpf(event.target.value)} required />
        <input type="text" placeholder="CPF"
          onChange={event => setName(event.target.value)} required />
        <input type="password" placeholder="Insira sua senha"
          onChange={event => setPassword1(event.target.value)} required />
        <input type="password" placeholder="Repita a sua senha"
          onChange={event => setPassword2(event.target.value)} required />

        <button onClick = {register} > Cadastrar </button>
      </Container>

    </>
  );
}

export default Register;