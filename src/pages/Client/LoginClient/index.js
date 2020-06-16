import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Search } from './styles';
import {FiSearch} from 'react-icons/fi'

const LoginClient = () => {

  const [cpf, setCpf] = useState('');
  const history = useHistory();

  const login = () => {
    console.log('clicked')
    axios.post('http://localhost:8080/get-service', {
      cpf: cpf
    })
      .then(function (response) {
        console.log(response.data)
        if (response.data.sucess) {
          history.push(
            "/client-on",
            { data: response.data.clients }
          );
        }
      })
      .catch(function (error) {
        alert("Algo de errado ocorreu! Contate a BS Celulares!")
        console.log(error);
      });
  }

  return (
    <Container>
        <div className='foco'>
          <p >Área do Cliente</p>
          <Search>
            <a onClick={login} ><FiSearch size= {25}/></a>
            <input onChange={event => setCpf(event.target.value)} placeholder='Digite seu cpf ...'></input>
          </Search>
        </div>
        
    </Container>
  )
};


export default LoginClient;





