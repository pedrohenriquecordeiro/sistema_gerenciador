import React,{useState, useEffect, createContext} from 'react';
import axios from 'axios';
import Context from './context';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import produce from 'immer';

import List from './List';
import { Container } from './styles';

function ActivityBoard() {
  
  const [services,setServices] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    axios.get('http://localhost:8080/get-all-services')
    .then((response) => {
      if (response.data.sucess) {
        setServices([...response.data.services])
      }
    })
    .catch(function (error) {
      alert("Ocorreu um erro, tente novamente! Se persistir o erro contate o administrador do Sistema!")
    });
  },[]);

  const move = (fromList,toList,fromCard, toCard) => {
    setServices(
      produce(services, draft => {
        const auxFromList = draft.filter((e) => e.estado == fromList);
        const dragged = auxFromList[fromCard];
        console.log(dragged._id);

        /*draft.forEach((current, index, array) => {
          if(current.estado == toList){
              const hovered = current;
              array[index] = dragged;
              array[fromCard] = hovered;
            }
        });
        */
      })
    )
  }
  
  return (
    <Context.Provider value = {{services, move}}>
      {console.log(services)}
      <DndProvider backend={HTML5Backend}>
        <Container>
          <List 
            key = {0}
            title = {"Registrado"} 
            indexList = {0}
            services = {services.filter( (service) => {return service.estado == 0} )}  
          />

          <List 
            key = {1}
            title = {"Na fila"} 
            indexList = {1}
            services = {services.filter( (service) => {return service.estado == 1} )}  
          />

          <List 
            key = {2}
            title = {"Fazendo"} 
            indexList = {2}
            services = {services.filter( (service) => {return service.estado == 2} )}  
          />

          <List 
            key = {3}
            title = {"Concluído"} 
            indexList = {3}
            services = {services.filter( (service) => {return service.estado == 3} )}  
          />

          <List 
            key = {4}
            title = {"Cancelado"} 
            indexList = {4}
            services = {services.filter( (service) => {return service.estado == 4} )}  
          />

          <List 
            key = {5}
            title = {"Pausado"} 
            indexList = {5}
            services = {services.filter( (service) => {return service.estado == 5} )}  
          />
        </Container>
      </DndProvider>
    </Context.Provider>
  );
}

export default ActivityBoard;