// 스코프란 변수의 접근성과 생존 기간을 제어하는 ‘생존 범위’를 의미

const func1 = function () {
    var a = 1;
    var b = 2;

    console.log(a + b);
};

var a = 20;

func1();





let z = 100;
function sum(x) { // x는 매개변수(parameter)이면서 지역변수(local val)
    let y = 50; // y는 지역변수
    z = z + y;
    return x + y;
}
console.log(sum(10)); // 10은 전달인자(argument)
console.log(x);
console.log(y);
console.log(z);
// 키워드로 인해 전역, 지역이 갈리는 것은 아닌지, let, var, const 모두 테스트 해보세요.




// 블록 레벨 스코프
if (true) { // for문이어도 마찬가지입니다.
    let x = 10;
    const y = 10;
}
console.log(x, y) // error 블록스코프를 벗어난 곳에서 콘솔 출력

// 밖에 선언된 x는 함수 내부에서도 접근 가능합니다.
let x = 100
function xplus() {
    x = x + 10
}

xplus()
console.log(x)

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다.
function xplus() {
    let a = 100
    a = a + 10
}

xplus()
console.log(a) // Error

// 함수 안에 함수
function a() {
    console.log('a 실행')
    function b() {
        console.log('b 실행')
    }
    b()
}

a()
b() // Error




// var은 블록 안에 있어도 외부에서 접근이 가능.
// var이 함수 내부에 선언된경우 접근 불가능.





let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;
        console.log(a, b, c);
    }

    inner();
    console.log(a, b);
}

outer();
console.log(a);

// 출력
// 10 20 30
// 10 20
// 10