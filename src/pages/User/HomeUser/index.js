import React, { useState,useEffect } from 'react';
import { useHistory,useLocation } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Header, MenuBar} from './styles'
import Panel from './Panel'

export default function HomeUser() {
    const [style1, setStyle1] = useState("active");
    const [style2, setStyle2] = useState();
    const [style3, setStyle3] = useState();
    const [panel, setPanel] = useState('activityboard');
    const [sideBar, setSideBar] = useState('close-side');

    const location = useLocation();
    const history = useHistory();

    const board = () => {
        setStyle1("active");
        setStyle2("");
        setStyle3("");
        setPanel('activityboard');
    }

    const schedule = () => {
        setStyle1("");
        setStyle2("active");
        setStyle3("");
        setPanel('schedule');
    }

    const databoard = () => {
        setStyle1("");
        setStyle2("");
        setStyle3("active");
        setPanel('databoard');
    }

    const actionSideBar = () => {
        if (sideBar == 'open-side') {
            setSideBar('close-side')
        } else if (sideBar == 'close-side') {
            setSideBar('open-side')
        }
    }

    /*useEffect(() => {
        console.log(location.state.data)
        return () => {}
    },[location])*/

    
    const back = () =>{
        history.goBack();
    }

    return (
        <>
            <Header>
                <a className="logo">Painel da BS Celulares</a>
                <MenuBar>
                    <div className='menu'>
                        <a className={style1} onClick={board}>Quadro de Atividades</a>
                        <a className={style2} onClick={schedule}>Agenda</a>
                        <a className={style3} onClick={databoard}>Painel de Desempenho</a>
                        <button className="openbtn" onClick={actionSideBar}>
                            <AiOutlineMenu />
                        </button>
                    </div>
                    <div id={sideBar} className='sidepanel'>
                        <button className="closebtn" onClick={actionSideBar}>
                            <AiOutlineClose size={30} />
                        </button>
                        <a href="#">Funcionários</a>
                        <a href="#">Sobre</a>
                        <a onClick={back}>Sair</a>
                    </div>
                </MenuBar>
            </Header>
            <Panel panel={panel} />
        </>
    )
}
