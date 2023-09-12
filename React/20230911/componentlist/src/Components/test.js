function test (){
    console.log('test');
}

export function test2(){
    console.log('test2');
}
// export default로 빼낸 함수가 아닌 경우 중괄호로 묶어서 import
// import test, {test2} from "./Components/test";

export default test;