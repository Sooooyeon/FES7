import { useEffect, useState } from "react";

function useMouseLocation(initVal){
  const [mouseLocation, setMouseLocation] = useState(initVal || {x:null, y:null});

  // DOM을 이용해서 화면상의 마우스 좌표를 얻어내고, mouseLocation에 업데이트 해보세요
  // mousemove 이벤트 활용
  // useEffect - mount 된 후 실행됨
  useEffect(()=>{
    window.addEventListener("mousemove",(event)=>{
        setMouseLocation({x:event.x, y:event.y})
      });
  },[]);

  return mouseLocation;
  

}

export default useMouseLocation;