import styled from 'styled-components';


export const Header = styled.div`
    
    height: 60px;
    /*width: 100vh;*/
    padding: 15px 30px;
    background: #000000;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    a.logo {
        color: #ffffff;
        font-size: 25px;
        font-weight: bold;
    };

    
    
`
export const MenuBar = styled.div`

    .menu{
        display: flex;
    };

    .menu a{
        color: #878787;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px; 
        line-height: 25px;
        border-radius: 4px;
    };

    .menu a:hover {
        background-color: #ddd;
        color: black;
    };

    .menu a.active {
        background-color: #545454;
        color: white;
    };

    .menu button.openbtn:hover{
        background-color: #ddd;
        color: black;
    };

    .menu button.openbtn{
        color: #878787;
        background-color: black;
        border: 0px;
        text-align: center;
        padding: 9px;
        font-size: 30px; 
        line-height: 0px;
        margin-left: 10px;
        border-radius: 4px;
    };

    .sidepanel  {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        width: 0;
        height: 100%;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 50px;
    };

    .sidepanel a {
        display:flex;
        flex-direction:column;
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 18px;
        color: #818181;
        transition: 0.3s;
    };

    .sidepanel a:hover{
        color: #f1f1f1;
    };

    .sidepanel button.closebtn{
        position: absolute;
        top: 5px;
        left: 20px;
        color: #878787;
        background-color: #111;
        border: 0px;
        text-align: center;
        padding: 9px; 
        line-height: 0px;
    };
    
    #close-side{
        width: 0px;
    };

    #open-side{
        width: 200px;
    };

    @media (max-width:760px) {
        .menu a {
            display: none
        }
    };


`