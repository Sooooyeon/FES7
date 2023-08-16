// 디스트럭쳐링(destructuring) === 구조 분해 할당 //////////////
// 디스트럭쳐링은 ES6부터 지원하는 문법으로, 배열이나 객체와 같은 데이터 구조를 분해하여 변수에 할당하는 표현식이다. 변수에 속성이나 요소를 간편하게 할당할 수 있다. 


// 디스트럭쳐링의 기본 구조
let obj = { one: 1, two: 2 };
let myNum = obj.one;
console.log(myNum); // 1


let obj = { one: 1, two: 2 };
let { one: myNum } = obj;
console.log(myNum); // 1

// 객체 리터럴로서의 {one: myNum} 구문은 one 이 데이터의 이름을, myNum 이 데이터의 값을 나타낸다면, 디스트럭쳐링의 {one: myNum} 구문은 myNum 이 데이터의 이름을, one 이 데이터의 값을 나타낸다. 모습은 동일하지만 하는 일은 완전히 반대. 자바스크립트 엔진은 단순히 할당연산자( = ) 의 왼쪽에 있으면 디스트럭쳐링, 오른쪽에 있으면 객체 리터럴로 해석.



let { one: myNum } = { one: 1 };
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴
console.log(myNum); // 1

const obj = { one: 1 };
obj.one // 1


// 디스트럭쳐링의 이름을 데이터 값의 이름과 동일하게 지어도 무관
let { one: one } = { one: 1 }
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴
console.log(one); // 1



// 이름과 콜론 생략 가능
let { one } = { one: 1 }
console.log(one); // 1

let { one, two, three, four } = { one: 1 }
// 디스트럭쳐링은 콜론을 통해 변수를 추가적으로 생성 가능
console.log(one); // 1
console.log(two); // undefined
console.log(three); // undefined
console.log(four); // undefined





// 디스트럭쳐링으로 코드 간략하게 만들기
/**
let food1, food2, food3;

const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
*/

const { food1, food2, food3 } = { food1: '과일', food2: '채소', food3: '육류' };

console.log(food1, food2, food3);






// 객체를 반환하는 함수가 있을 경우, 함수의 반환값을 받는 변수를 굳이 만들 필요도 없음
const obj = { food1: '과일', food2: '채소', food3: '육류' };
function objReturn() {
    return obj
}
obj.food1 = '어류'

// 반환값을 바로 디스트럭쳐링
const { food1, food2, food3 } = objReturn();
console.log(food1, food2, food3);




const { food1: food1, food2: food2, food3: food3 } = { food1: '과일', food2: '채소', food3: '육류' };
console.log(food1, food2, food3);



const { food1: f1, food2: f2, food3: f3 } = { food1: '과일', food2: '채소', food3: '육류' };
console.log(f1, f2, f3);


const obj = { num1: "1", num2: "2", num3: "3" };
const { num1, num2, num3 } = { ...obj, num1: "10" }
num1 // "10"



// 배열의 디스트럭쳐링

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


const arr = [1, 2, 3];
const [d, e, f, a, b, c] = arr;
console.log(d); // 1
console.log(e); // 2
console.log(f); // 3
console.log(a); // undefined
console.log(b); // undefined
console.log(c); // undefined



// 함수의 디스트럭쳐링
// 함수의 매개변수를 분해하여 변수에 할당하는 방법. 이를 통해 함수에서 각각의 인수를 간편하게 사용할 수 있다.

function myFunc([a, b]) {
    console.log(a);
    console.log(b);
}

const arr = [1, 2];

myFunc(arr);



function myFunc({ a, b }) {
    console.log(a);
    console.log(b);
}
const obj = { a: 1, b: 2 };

myFunc(obj);
