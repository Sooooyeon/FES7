// **** 별표!!

// 1. 비교 연산을 했을 때
let x = 3
let y = 5
console.log(x > y)

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (ture나 false가 아닌 경우 단락회로평가가 일어남)
let x2 = true
let y2 = false
console.log(x2 && y2)

// 3. true나 false로 평가되는 것들
// if(value) {
//    // value가 true일 때 실행
//    // 그렇다면 어떤 value가 true일까?
// }

if (Boolean('hello')) {
    console.log('실행되었음!')
    // 실행되었음이 출력되는가?
    // --> 출력됨! 불리언은 빈 문자열을 포함한 모든 문자열을 truthy 값으로 평가
}

if ('hello') {
    console.log('실행되었음!')
    // 실행되었음이 출력되는가?
    // --> 출력됨! 문자열은 0과 1중 1로 판단됨. if문에서 1은 true
}

Boolean('hello') // true
Boolean('') // false
Boolean(' ') // true
Boolean(0) // false
Boolean(1) // true
Boolean(-1) // true
Boolean(100) // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
// !!null // 실무에서 true, false를 구분할 때 사용
// !!null, !!'hello'
// !!표시가 나오면 Boolean이라고 생각하기.


// 4. javascript에서 나를 힘들게 하는 true, false
x = [1, 2, 3]
x.pop()
x.pop()
x.pop()
!!x // true
// x가 가리키고 있는 값은 변한적이 없음. 따라서 true에서 false로 바뀌는 것은 옳지 않다.

Boolean([1, 2, 3]) // true
Boolean([]) // true - 불리언이 가리키고 있는 공간은 변함이 없음
Boolean({ 'one': 1 }) // true
Boolean({}) // true - 불리언이 가리키고 있는 공간은 변함이 없음

null == undefined // true
null > undefined // false, 다른 비교(작다, 크다, 작거나같다, 크거나같다)도 모두 false
null < 100 // true | 음수, 0과 비교하면 false
nuul > 100 // false | 음수와 비교하면 true, 0과 비교하면 false
undefined < 100 // 숫자와 비교는 모두 false