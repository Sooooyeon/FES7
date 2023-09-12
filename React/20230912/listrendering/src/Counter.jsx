import React from 'react'
import { useState } from 'react';

export default function Counter() {

    const  [count, setCount] = useState(0);
    const  [count2, setCount2] = useState(0);

    function increment(){
        setCount((prev)=>{return prev + 1});
        setCount((prev)=>{return prev + 1});
        setCount2(count2 + 1);
        setCount2(count2 + 1);
        setCount((prev)=>{return prev + 1});
        // state 함수가 실행되면 state가 변경된다. state가 변경되면 컴포넌트가 다시 렌더링 됨
        // 이때 state 함수는 바로 실행되지 않고 기다렸다가 가장 마지막에 호출된 state 함수만 실행된다.
        // 이런 현상이 발생하는 이유는 업데이트는 비용이 큰 작업이고, state 함수는 비동기적으로 동작하기 때문이다.
    }

    function decrement(){
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Count의 값은 : {count}, {count2}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
