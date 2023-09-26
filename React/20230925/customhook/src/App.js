import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useScroll from "./Hook/useScroll";
import scroll복습 from "./Hook/scroll복습"

function App() {

  // const mouseLocation = useMouseLocation();
  const isBottom = scroll복습();
  console.log(isBottom);

  // console.log(useMouseLocation());
  return (
    <div style={{height:3000}}>
      {/* <div style={{height:100, width:100, backgroundColor: mouseLocation.x > 100 ? "royalblue" : "salmon"}}></div> */}
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
