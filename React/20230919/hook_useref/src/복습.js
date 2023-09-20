import React from 'react'
import {useState, useEffect} from 'react';


function Counter (){
  const [count,setCount]  = useState(0);
  const [checkRender, setCheckRender] = useState(0);
  const handleCountUp = (e) => {
    setCount(count+1)
  }

  // useEffect - state를 지정해 해당 state가 변경됨을 감지하면 함수를 실행
  // count가 변했을때 동작할 행동을 useEffect를 이용해 구현

  useEffect(()=>{
    if(checkRender){
    if(count%2){
      console.log('홀수입니다.')
    } else {
      console.log('짝수입니다.')
    }
  } else {
    setCheckRender(true);
  }
  }, [count])

  // 페이지를 새로고침하지 않았는데도 "짝수입니다"라는 메시지가 콘솔창에 찍히는 이유는 useState(0)에서 count값을 0으로 초기화하면서 count의 값이 변하기 때문이다.
  const [test,setTest]  = useState(0);
  function handleHello(){
    setTest(test+1)
  }

// 컴포넌트가 업데이트 될 때마다 매번 실행
  useEffect(()=>{
    console.log('hello world1');
  })

  // 처음에만 실행
  useEffect(()=>{
    console.log('hello world2');
  }, [])

  // 변수들의 변화가 일어날 때마다 실행
  useEffect(()=>{
    console.log('hello world3');
  }, [test])

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <button onClick={handleHello}>hello!</button>
    </>
  )


}


export default function 복습() {
  return (
    <div>
      <Counter/>
    </div>
  )
}
