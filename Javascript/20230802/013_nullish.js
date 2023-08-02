// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법으로 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요하다.

// nullish 문법은 null과 undefined 이외의 값은 모두 값으로 판단한다!

let firstName = null;
let lastName = null;
let nickName = "soo";

console.log(firstName ?? nickName) // soo
console.log(firstName ?? lastName ?? nickName) // soo


let firstName2 = null;
let lastName2 = "j";
let nickName2 = "soo";

console.log(firstName ?? nickName) // soo
console.log(firstName ?? lastName ?? nickName) // j

let height = 0;
console.log(height ?? 100) // 0이 null인가? 아니니까 0을 출력. nullish 입장에서는 0도 value이다.
console.log(height || 100) // 0을 만났을 때 뒤를 봐야할까? -> 봐야한다. 논리 연산에서 0은 falsy한 값이기 때문.

let height2;
console.log(height2 ?? 100) // heightㅇ2의 값이 undefined이므로 100이 출력됨
console.log(height2 || 100) // 논리 연산에서 undefined는 falsy한 값, 뒤를 확인하고 값 출력

let height3 = '';
console.log(height3 ?? 'world') // ''이 null인가? 아니니까 ''을 출력한다. nullish 입장에서는 ''도 value이다. 
console.log(height3 || 'hello') // ''을 만났을 때 뒤를 봐야 할까? --> 봐야함! 논리 연산에서 빈 문자열은 falsy값으로 평가되어 뒤의 값에 따라 출력값이 결정됨.

// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined


// nullish 문제
// 1번
let username1;
let nickname1;
console.log(username1 || nickname1 || 'guest') // guest

// 2번
let username2 = '';
let nickname2 = '';
console.log(username2 || nickname2 || 'guest') // guest

// 3번
let username3 = '';
let nickname3 = '';
console.log(username3 ?? nickname3 ?? 'guest') // 빈문자열출력

// 4번
let username4;
let nickname4;
console.log(username4 ?? nickname4 ?? 'guest') // guest
