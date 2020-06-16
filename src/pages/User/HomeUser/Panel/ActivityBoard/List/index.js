import React from 'react';

import { Container } from './styles';
import { MdAdd } from 'react-icons/md';

import Card from '../Card';


function List({title,indexList,services}) {
  return(
      <Container >
        <header>
          <h2>{title}</h2>
        </header>
        <ul>
          {services.map( 
            (service, index) => 
              <Card 
                key = {service._id} 
                indicador = {service._id} 
                indexCard = {index} 
                indexList = {indexList}
                service = {service}
              /> 
          )}
          </ul>
      </Container>
    );
}

export default List;