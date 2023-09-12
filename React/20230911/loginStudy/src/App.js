import React, {useState} from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  
  const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
  }

  // 로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);

  // 모달 state
  const [modalShow, setModalShow] = useState(true);


  return (
    <>
      {login ? <Homepage setLogin={setLogin} setModalShow={setModalShow} modalShow={modalShow}/> : <Login userInfo={user} setLogin={setLogin} />}
    </>
  );
}
export default App;
