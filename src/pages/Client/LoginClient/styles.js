import styled from 'styled-components';

export const Container = styled.div`

    :root {
        --dark-coffee-0: #000000;
        --dark-coffee-1: #0C0D0C; 
        --dark-coffee-2: #242621; 
        --dark-coffee-3: #A89E92; 
        --dark-coffee-4: #735E50; 
        --dark-coffee-5: #572D1D; 
        --silver3: #595959;
        --silver2: #A6A6A6;
        --silver1: #F2F2F2;
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    p{
        font-size: 25px;
        font-weight: 600;
        color: #242621;
    }

    .foco{
        border-style: solid;
        border-width:1px;
        border-color:#0C0D0C;
        border-radius:10px;
        
        min-height: 400px;
        min-width: 400px;
        
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

    }
`

export const Search = styled.div`
    
    display:flex;
    align-items:center;
    margin-top: 30px;

    a{
        border-style: solid;
        border-width: 1px;
        border-color: #A6A6A6;
        height:50px;
        width: 40px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    a:hover{
        border-width:2px;
    }
    
    input{
        min-width:200px;
        min-height: 50px;
        border-style: solid;
        border-width: 1px;
        border-color: #A6A6A6;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size:20px;
        padding: 5px;
    }

   

`