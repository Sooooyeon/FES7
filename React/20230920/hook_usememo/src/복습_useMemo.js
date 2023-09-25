import React from 'react'
import { useState, useRef, useMemo } from 'react';

    export default function 복습() {
        const [name, setName] = useState('');
        const [id, setId] = useState('');
        const [userInfo, setUserInfo] = useState([]);

        const inputName = useRef(null);
        const inputId = useRef(null);

        function handleSubmit(e){
            e.preventDefault();

            if(inputName.current.value !== '' && inputId.current.value !== ''){

            inputName.current.value = '';
            inputId.current.value = '';
            inputName.current.focus();

            setUserInfo(()=>(
            [...userInfo,{name, id}]
            ))
            console.log('렌더링 -3.회원명부작성');       

            } else{
                alert('이름과 아이디를 모두 입력해주세요.')
            }
            
        }

        function handleInputName(e){
            setName(e.target.value);
            console.log('렌더링 -1.이름입력');
        }

        function handelInputId(e){
            setId(e.target.value);
            console.log('렌더링 -2.아이디입력');
        }

        function getNum(list){
            console.log('렌더링!')
            return list.length
        }

        // useInfo 값이 업데이트 될 때만 getNum함수가 실행되도록 함
        const itemLength = useMemo(()=>{
            return getNum(userInfo);
        },[userInfo]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='이름을 입력해주세요.' onChange={handleInputName} ref={inputName}/>
                <input type='text' placeholder='아이디를 입력해주세요' onChange={handelInputId} ref={inputId}/>
                <button>회원명부 작성</button>
            </form>
            <ul>
                {userInfo.map((item,index)=>{
                    return (
                    <li key={index}>
                        <h3>이름:{item.name}</h3>
                        <p>아이디:{item.id}</p>
                    </li>
                    )
                })}
            </ul>
            <span>현재 회원 수 : {itemLength}</span>
        </>
    )
}
