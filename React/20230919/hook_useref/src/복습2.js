import React from 'react'
import { useState, useRef } from "react";


// useRef는 순수 자바스크립트 객체를 생성하며 값의 접근은 refContainer.current로 할 수 있다.

// useRef는 크게 2가지로 사용
// 1. 컴포넌트가 다시 렌더링 되어도 초기화 되지 않아야 하는 값을 저장해야할 때 사용한다. useRef를 통해 저장된 값은 컴포넌트가 다시 렌더링 되어도 변하지 않는다. 

// useState와의 차이점
// useState는 값이 업데이트 되면 컴포넌트가 다시 렌더링되지만 useRef의 값은 업데이트가 되어도 컴포넌트가 다시 렌더링되지 않는다. 따라서 화면에 표시되어야 하는 정보를 저장할 때는 적합하지 않다.

// 2. 컴포넌트의 특정 요소에 직접 접근하고 싶을 때 useRef를 사용한다. 자바스크립트에서 DOM 노드에 접근하고 싶을때는 querySelector나 getElementById를 사용하지만 React에서는 useRef를 사용한다. 

export default function 복습2() {

  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();

    if(emailInput.current.pwValue === ""){
      alert('이메일을 입력해주세요!')
      emailInput.current.focus();
      return;
    } else if(pwInput.current.value ===""){
      alert('비밀번호를 입력해주세요!')
      pwInput.current.focus();
      return;
    }

    setEmailValue(emailInput.current.value)
    setPwValue(pwInput.current.value)

  };

  return (
    <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
      <label>
        <input type="text" ref={emailInput} />
      </label>
      <label>
        <input type="password" ref={pwInput} />
      </label>
      <button style={{ width: "100px" }}>로그인</button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  )
}
