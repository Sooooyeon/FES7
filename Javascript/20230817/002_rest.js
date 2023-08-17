// 함수의 매개변수에 `...`를 붙이면 사용자가 제공한 모든 매개변수를 배열안에 넣도록 지정하며, 이를 `나머지(rest) 매개변수`라 한다.

// rest 문법을 이용할 때 주의해야할 점
// 1. 매개변수에는 하나의 `rest`만 존재할 수 있다.
// 2. `rest`는 반드시 함수 정의의 마지막 매개변수여야 한다.



// rest 문법을 이용한 매개변수를 선언

function 함수2([a, b], ...c) {
    console.log(a)
    console.log(b)
    console.log(c)
}
함수2([1, 2], 10, 20, 30, 40);
// 출력
// 1
// 3 2
// [10, 20, 30, 40]


function 함수2(a, b, ...c) {
    console.log(c)
    return Math.max(...c)
}
함수2('hello', 'world', 10, 20, 30, 40, 50, 60, 70);
// 출력
// [10, 20, 30, 40, 50, 60, 70]
// 70
