// isNaN() 함수는 어떤 값이 NaN인지 판별한다.
// isNaN() 함수는 어떤 값이 숫자가 아닌지 판별한다.
// 숫자로 판별되는 것들은 flase를 반환하고
// 숫자로 판별되지 않는 것들은 true를 반환합니다.


/* https://en.wikipedia.org/wiki/IEEE_754 Because 'Not a Number' is not a number, and is not equal to anything, including Not a Number. */


//isNaN
isNaN(NaN); // true
isNaN(10); //false
isNaN('10'); //false
isNaN('a'); //true
isNaN('10px'); //true
isNaN([]); //true
isNaN({}); //true

//Number.isNaN 사용을 권고해드립니다.
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN('10'); //false
Number.isNaN('a'); //false
Number.isNaN('10px'); //false
Number.isNaN([]); //false
Number.isNaN({}); //false

// isNaN은 내부적으로 Number() 함수를 사용.
// Number() 함수는 인수를 숫자로 변환할 수 없으면 NaN을 반환.
// 활용법
// https://school.programmers.co.kr/learn/courses/30/lessons/120850
// "p2o4i8gj2"

// isNaN은 Number로 숫자변환이 가능한 값을 false로 준다
// !isNaN(value[0]) --> 숫자를 걸러내는 방법
let value = "p2o4i5gj2"

isNaN(value[0]) // p,  true
isNaN(value[1]) // 2,  false
isNaN(value[2]) // o,  true
// ... 생략...

// 문제를 다 더하는 것으로 수정(정렬 아직 안 배움)
let value2 = "p2o4"
let sum = 0;
if (!isNaN(value2[0])) {
    sum += parseInt(value2[0])
}
if (!isNaN(value2[1])) {
    sum += parseInt(value2[1])
}
if (!isNaN(value2[2])) {
    sum += parseInt(value2[2])
}
if (!isNaN(value2[3])) {
    sum += parseInt(value2[3])
}
console.log(sum)

// 안배운 것을 사용해보자면

"p2o4i8gj2".split("").filter(v => !isNaN(v))
// false인 것을 필터함. 따라서 2,4,8,2 필터됨

let arr = "p2o4i8gj2".split("").filter(v => !isNaN(v));
let sum2 = 0;
for (i = 0; i < arr.length; i++) {
    sum2 += parseInt(arr[i]);
}
console.log(sum2) // 16


// console.log(NaN === NaN);
// '숫자가 아님'은 '숫자가 아님'과 동일한가? -> 동일하다! true!

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성한다. 이러한 비교는 다음과 같이 수행된다.

/* 
Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 이것은 알고리즘이 먼저 피연산자 중하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다.
*/
console.log(NaN == NaN); // true가 아니라 false
console.log(NaN === NaN); // true가 아니라 false

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log('hello world' - 100) // NaN
console.log('hello world' / 100) // NaN
console.log('hello world' * 100) // NaN
console.log('2' * 10) // 20
console.log("---");


// 암기
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---"); //undefined

// ES6에서 추가 도입(암기)(*)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/