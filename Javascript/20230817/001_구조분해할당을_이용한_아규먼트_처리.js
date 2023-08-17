// 구조분해할당을 이용한 아규먼트 처리

function userInfo({ name, age, address } = {}) {
    console.log(`이름:${name}, 나이:${age}, 주소:${address}`);
}

const user = {
    name: 'soo',
    age: 29,
    address: '경기도'
}

userInfo(user);

// 위의 코드에서는 매개변수에 빈 객체를 할당하고 있다. 할당하지 않을경우 userInfo 함수에 인자를 넘기지 않고 실행했을 때 에러가 발생하게 됨. 인자(아규먼트) 없이 실행할 경우를 대비해 빈 객체를 할당해 둔다.(안전한 예외 처리)

////// 아규먼트 없이 호출 가능 //////
function 함수({
    a = 2,
    b = 1,
    c = 3
} = {}) {
    console.log(a, b, c);
    return a + b + c;
}
console.log(함수({ a: 20, b: 30, c: 10 }));
함수() // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a = 10, b = 20, c = 30) {
    return a + b + c
}
함수()

// X
function 함수({ a = 10, b = 20, c = 30 }) {
    return a + b + c
}
함수()

// O
function 함수({ a = 10, b = 20, c = 30 }) {
    return a + b + c
}
함수({}) // 이 코드를 축소한 코드가 위의 코드입니다.

// 함수에서 받는 부분         // 아규먼트를 전달해주는 부분
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}  // 이 방식이 간소화된 것입니다.
// let {a=10, b=20, c=30} = undefined




// 함수에서 객체를 인자로 전달받는 방법
// 초깃값 설정1 //

function 함수4({
    회원등급 = 'Gold',
    글쓰기 = true,
    글읽기 = true,
    채널관리 = true,
    백업 = '부분가능',
    소셜로그인여부 = true

}) {
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
}

함수4({
    회원등급: 'Silver',
    소셜로그인여부: true
})
// 출력
// 함수기능
// Silver true true true 부분가능 true

