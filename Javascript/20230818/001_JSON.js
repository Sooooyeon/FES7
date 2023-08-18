// JSON(JavaScript Object Notation)은 자바스크립트 객체 형식으로 데이터를 표현하는 문자 기반의 표준 포맷. 다른 방식에 비해 가볍고 자바스크립트와 호환성이 높아 널리 사용됨.
// JSON - 텍스트로 표현된 정보의 덩어리

// JSON 메서드
// JSON.parse(): JSON문자열을 자바스크립트 객체로 변환.
// JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환.


const json = '{"result":true, "count":42}' // JSON 문자열
const obj = JSON.parse(json); // parse 메서드 사용해 자바 스크립트 객체로 변환
console.log(obj);
// 출력
// {result: true, count: 42}


const json2 = '[1,2,3,[1,2,3]]'; // JSON 문자열
const arr = JSON.parse(json2); // parse 메서드 사용해 자바 스크립트 객체로 변환
console.log(arr);
// 출력
// [1, 2, 3, Array(3)]
console.log(arr instanceof Object); // true
// instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지를 확인할 수 있다. instanceof는 상속 관계도 확인해준다.




const obj2 = { "result": true, "count": 42 }
const json3 = JSON.stringify(obj2);
console.log(json3); // {"result":true,"count":42}
typeof json3 // 'string'


// 얕은 복사 - 주소 값 복사
// 깊은 복사 - 데이터 자체를 복사

// JSON을 이용한 깊은 복사
// l 객체를 문자열화 했다가 다시 객체로 변환하기 때문에 새로운 객체를 생성하는것과 동일합니다. 하지만 함수는 제대로 복사가 불가능하다는 단점이 있습니다. 제대로된 깊은 복사를 위해서는 structuredClone() 메소드를 사용해야합니다.
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l); // a의 값이 변했지만 l의 값에 영향을 미치지 않음


let l = { "ten": 10, "twenty": 20, "thirty": { "forty": 40 } };
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);
// {ten: 10, twenty: 20, thirty:{forty: 40}}


