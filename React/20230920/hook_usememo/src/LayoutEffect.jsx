// import React from 'react'
// import { useEffect, useState } from 'react';

// export default function LayoutEffect() {
//     const [num, setNum] = useState(0);

//     useEffect(() => {
//     setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
// },[]);
//     return (
//         <h1>{num}</h1>
//     )
// }

import { useState, useEffect, useLayoutEffect } from 'react'

function LayoutEffect() {
  const [value, setValue] = useState(100);
  
  // useLayoutEffect가 아닌 useEffect일 경우 파란색 반짝임이 생김
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default LayoutEffect;