import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex-basis: 250px;
    min-width:120px;

    /*opacity: ${props => props.done ? 0.9 : 1};*/

    /*  & + div = pula um elemento (no caso um div) e aplica entao nos elementos restantes  */
    & + div{
        border-left : 1px solid rgba(0, 0, 0, 0.1)
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        
        h2{
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 25px;
            height: 25px;
            border-radius: 5px;
            background: rgba(255, 51, 51);
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 10px;
    }
`