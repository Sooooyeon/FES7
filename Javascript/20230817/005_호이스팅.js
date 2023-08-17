// 호이스팅은 변수나 함수 선언문이 해당 스코프의 최상단으로 끌어올려지는 현상을 말한다. 즉, 코드에서 변수나 함수를 선언하기 전에 해당 변수나 함수를 사용할 수 있는 것처럼 보이는 현상을 의미.


console.log(x);
console.log(y);
console.log(z);

var x = 1;
let y = 2;
const z = 3;


// 무언가를 선언하면 항상 호이스팅이 일어남
// 호이스팅은 변수의 선언만을 끌어올리고, 변수의 초기화나 할당은 끌어올려지지 않는다.
var x;
console.log(x);
console.log(y);
console.log(z);

x = 1;
let y = 2;
const z = 3;




console.log(x);
console.log(y);
console.log(z);

x = 1;
let y = 2;
const z = 3;