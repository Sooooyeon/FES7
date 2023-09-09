import './App.css';

function App() {
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div style ={{backgroundColor:"black",color:"white"}}>
      <h1 style ={{color:"red"}}>년 : {year}</h1>
      <h2>월/일 : {month+1}/{day}</h2>
      <h3>시간 : {hours}시 {minutes}분 {seconds}초</h3>
		</div>
  );
}


export default App;
