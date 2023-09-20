import { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const countThree = useRef(0);
  let countFour = 0;

  // console.log(countThree);

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  }

  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  }


  const handleCountUpThree = () => {
    countThree.current += 1;
    console.log(countThree.current);
  }


  const handleCountUpFour = () => {
    countFour += 1;
    console.log(countFour);
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.', count)
  }, [count]) // count가 변경되는 것을 감시

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )

}


function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;