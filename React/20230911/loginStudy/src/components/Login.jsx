import React from 'react'
import {useState} from 'react';

export default function Login({userInfo,setLogin}) {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    
    function handleIdInput(event){
        setId(event.target.value)
    }
    function handlePwInput(event){
        setPw(event.target.value)
    }

    function handleLoginSubmit(event){
        event.preventDefault();
        if(id === ''){
            alert("아이디를 입력하지 않았습니다.")
        } else if(pw === ''){
            alert("패스워드를 입력하지 않았습니다.")
        }
        if(id === userInfo.idUser && pw === userInfo.pwUser.toString()){
            setLogin(true);
        }
        console.log(`id : ${id}, pw : ${pw}`);
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <label> 아이디 : 
                <input type="text" onChange={handleIdInput}/>
            </label>
            <label> 비밀번호 : 
                <input type="password" onChange={handlePwInput} />
            </label>
            <button type='submit'>로그인</button>
        </form>
    )
}
