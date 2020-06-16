import styled, {css} from 'styled-components';

export const Container = styled.div`
   position: relative;
   background: #fff;
   border-radius: 5px;
   margin-bottom: 10px;
   padding: 15px;
   box-shadow: 1px 2px 4px 0 rgba(192,208,230,0.8); /* box-shadow: h-offset v-offset blur spread color |inset|initial|inherit; */
   border-top: 20px solid rgb(224, 224, 209);
   cursor: grab;
   
   header{
       position: absolute;
       top: -22px;
       left: 15px;
   }

   p{
       font-weight: 500;
       line-height: 20px;
       
   }

   #indicador{
        font-size:9px;
    }

   img{
       height: 15px;
       width: 15px;
   }

   

   ${props => props.isDragging && css`
   
        border: 2px dashed rgba(0,0,0,0.5);
        padding-top: 200px;
        background: transparent;
        border-radius: 0;
        margin-bottom: 10px;
        padding: 15px;
        box-shadow: none; 
        cursor: grab;

        header{
            position: absolute;
            opacity: 0;
            top: -22px;
            left: 15px;
        }

        p{
            font-weight: 500;
            line-height: 20px;
            opacity: 0;
        }

        img{
            opacity: 0;
        }
   
   `}


`

