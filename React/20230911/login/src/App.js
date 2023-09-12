import React, { useState } from 'react'
import Login from './components/Login'
import Homepage from './components/Homepage';
import Modal from './components/Modal';

export default function App() {
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);

    // 모달창 닫는 state
    const [close, setClose] = useState(true);

    return (
        <>
            {login ? <Homepage setLogin={setLogin} setClose={setClose}/> : <Login infoUser={user} setLogin={setLogin} />}
            {close && <Modal  setClose={setClose}/>}
        </>
    )
}