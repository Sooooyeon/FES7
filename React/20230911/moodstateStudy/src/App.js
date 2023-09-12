import MoodList from "./components/MoodList/MoodList";
import Display from "./components/Display/Display";
import { useState } from "react";

function App() {

  const [currentMood, setCurrentMood] = useState("");

  return (
    <>
      <h1 style={{textAlign:"center"}}>오늘의 기분을 선택해주세요 ☺️</h1>
      <MoodList setCurrentMood={setCurrentMood}/>
      <Display mood={currentMood}/>
    </>
  );
}
export default App;
