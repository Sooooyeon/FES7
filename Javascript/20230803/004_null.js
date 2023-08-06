let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo(foo는 임시 변수를 의미)
var value2 = null;
console.log(value2); //null




// 참고삼아서만 알아두기
// null
null + 100 // 100
null * 100 // 0
null / 0 // NaN
null - 100 // - 100


// 반평균
let 반점수 = [10, 20, 30, null, 40, 50]
let 반평균 = 0
for (const i of 반점수) {
    console.log(i)
    반평균 += i
} // null - 반평균 출력 시 모두 더한값이 출력됨



let 반점수2 = [10, 20, 30, undefined, 40, 50]
let 반평균2 = 0
for (const i of 반점수2) {
    console.log(i)
    반평균2 += i
}

// undefined - 반평균 출력 시 NaN 출력