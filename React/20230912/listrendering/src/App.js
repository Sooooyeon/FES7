function App() {
  return (
    <Hello name="gary"/>
  );
}

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.


// forEach로 리스트 생성하기
// const numComponentsArray = [];
// num.forEach((i,index)=>{
//   numComponentsArray.push(<h1 key={index}>안녕, {name} {i}호</h1>);
// })


	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i,index)=><h1 key={index}>안녕, {name} {i}호</h1>);
  // Key는 유일한 값이어야 한다.
  // key 를 인덱스로 넣을경우 인덱스가 바뀌게 되는 상황이 발생했을때 key의 의미를 잃게된다. 따라서 권장되지 않는 방식이다.

  return(
    <div>
      {numComponentsArray}
    </div>
  )
}

export default App;