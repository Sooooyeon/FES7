import { useState, useMemo } from 'react'

function 부하() {
  // console.time();
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  // console.timeEnd();
  return s
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  let result = useMemo(() => {
    return 부하();
  }, [countTwo]);
  // 의존 배열이 없다면 콜백함수를 무조건 실행
  // 특정 변수가 변할 때에만 복잡한 연산을 수행하도록 지정할 수 있다.
  // --> countTwo의 값이 변할때마다 countTwo를 사용한 곳에는 부하가 걸리게 됨

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo);
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <div>{countTwo}</div>
      <button onClick={handleCountUp}>UP!</button>
      <button onClick={handleCountUpTwo}>UP2!</button>
    </div>
  );
}
export default App;