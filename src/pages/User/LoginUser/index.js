import { useHistory } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

import { Container, Search} from './styles';

function LoginUser() {

  const login = () => {
    if (cpf === '' || password === '' ) return null;

    axios.post('http://localhost:8080/login-user', {
      cpf: cpf,
      password: password
    })
      .then(function (response) {
        if (response.data.sucess) {
          history.push(
            "/user-on",
            {data: response.data.user}
          );
        }
      })
      .catch(function (error) {
        alert("Ocorreu um erro, tente novamente! Se persistir o erro contate o administrador do Sistema!")
      });
  }

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <>
      <Container>
        <div className='foco'>
          <p >Área do Funcionário</p>
          <Search>
            <input onChange={event => setCpf(event.target.value)} placeholder='Digite seu cpf ...'></input>
            <input onChange={event => setPassword(event.target.value)} placeholder='Digite sua senha ...'></input>
            <a onClick={login} >LOGIN</a>
          </Search>
        </div>
        
    </Container>
    </>
  )
}

export default LoginUser;