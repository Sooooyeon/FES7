import React from 'react'
import './Modal.css'

export default function Modal({setClose}) {
    function close(){
        setClose(false);
    }
    return (
        <div className='modal_backdrop'>
            <div className='modal'>
                <h2>회원이 되신 것을 환영합니다!</h2>
                <button onClick={close}>닫기</button>
            </div>
        </div>
    )
}
