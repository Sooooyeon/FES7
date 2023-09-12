import React from 'react'
import Modal from './Modal';

export default function Homepage({setLogin,modalShow,setModalShow}) {

    

    function logout(){
        setLogin(false)
    }

    return (
        <>
            <main>
                <h1>홈페이지에 오신것을 환영합니다!</h1>
                <button onClick={logout}>로그아웃</button>
            </main>
            {modalShow ? <Modal setModalShow={setModalShow} /> : null }
        </>

    )
}
