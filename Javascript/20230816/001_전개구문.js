// 배열의 전개 구문 ////////////

// 배열의 전개 구문은 대괄호 안에서 세 개의 점을 사용하여 배열을 확장
const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];

console.log(합치면); // ['사과', '파인애플', '수박', '조기', '갈치', '다금바리']


// 기존의 전개 구문을 이용해 배열을 복사 (새로운 배열을 만들수도 있음)
// 이렇게 생성된 배열은 기존의 객체 자료형처럼 참조를 공유하지 않고, 완전히 별개인 새로운 값이 할당됨

const 과일들2 = [...과일들];

과일들2.push('키위');
console.log(`${과일들2} & ${과일들}`);
// 사과,파인애플,수박,키위 & 사과,파인애플,수박




// 객체의 전개 구문 ////////////

// 중괄호 안에서 세개의 점을 사용하여 객체를 확장
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };

console.log(위니브3); // {개리: 1, 빙키: 2, 라이캣: 3}


// 배열의 전개 구문처럼 객체 전개 구문 역시 기존 객체를 복사해 완전히 새로운 값을 할당 할 수 있음
const me = { name: "철수", address: "서울" };

const clonedMe = { ...me };

clonedMe.age = 25;

console.log(`${Object.keys(me)} & ${Object.keys(clonedMe)}`);   // name,address & name,address,age


// 전개되는 객체들 중에 같은 이름의 key가 있다면, key의 값은 나중에 온 객체의 키값으로 업데이트 됨.
const me = { name: "철수", address: "서울" };
const newAddress = { address: "제주" };
const newMe = { ...me, ...newAddress }

console.log(newMe);   // {name: '철수', address: '제주'}


