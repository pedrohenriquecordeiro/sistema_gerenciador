import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Container } from './styles';
import Context from '../context';

function Card({indicador,indexCard, indexList, service}) {

   const ref = useRef();
   const {move} = useContext(Context);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', id: service._id, indexCard: indexCard, indexList: indexList },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      /* item eh o card que ta passando por cima desse card agr */
      if (!ref.current) return

      const dragIndexList = item.indexList;
      const hoverIndexList = indexList;

      const dragIndexCard = item.indexCard;
      const hoverIndexCard = indexCard;

      if (dragIndexCard === hoverIndexCard) return
      
      // current = card hover
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndexCard < hoverIndexCard && hoverClientY < hoverMiddleY) return
      // Dragging upwards
      if (dragIndexCard > hoverIndexCard && hoverClientY > hoverMiddleY) return
      // move 
      move(dragIndexList,hoverIndexList,dragIndexCard,hoverIndexCard);
      item.indexCard = hoverIndexCard;
    }
  })

  /* atribui a referencia de drag e drop ao Card */
  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header></header>
      <p>indexLista:{indexList}</p><p>indexCard:{indexCard}</p>
      <h4 id = 'indicador'>{indicador}</h4>
    </Container>
  );
}

export default Card;