// Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류

// Map에 값을 넣기 - set
// Map의 값에 접근하기 - get
// Map의 값이 있는지 확인하기 - has
// Map의 값을 제거하기 - delete
// Map의 크기를 확인하기 - size
// Map의 모든 데이터를 삭제하기 - clear



new Map();
const myMap = new Map();
myMap.set('하나', 1); // {'하나' => 1}

myMap.get('하나')  // 1

myMap.set(true, 1) // {'하나' => 1, true => 1}
myMap.get(true) // 1

myMap.has(1); // false
myMap.has('하나'); // true

const test = function () { };
myMap.set(test, 'my function')
// {'하나' => 1, true => 1, ƒ => 'my function'}

myMap.delete('하나'); // true
myMap // {true => 1, ƒ => 'my function'}

myMap.size // 2

myMap.clear()
myMap // Map(0) {size: 0}




// map -> 여러가지 메서드 사용해 데이터 관리에 특화

const data = new Map().set('name', 'hojun').set('age', 10).set('height', 180)
data // {'name' => 'hojun', 'age' => 10, 'height' => 180}








// Map의 순환(일반적인 for문을 사용하려면 아래처럼 전개해야 합니다.)
// let m = [...data]
for (const variable of m) {
    console.log(`m을 순회하고 있습니다. ${variable[0]}`)
    console.log(`m을 순회하고 있습니다. ${variable[1]}`)
}

for (const [key, val] of m) {
    console.log(`${key}: ${val}`);
}
// 화살표함수 사용시 중괄호 쓰면 반드시 리턴값을 줘야함. 중괄호 사용하지 않을 경우 리턴값 생략 가능


// Map의 값에 접근
console.log(m.keys());
console.log(m.values());




// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([[1, 10],
[2, 20],
[3, 30],
[4, 40]]);

console.log(temp);
// Map(4) {1 => 10, 2 => 20, 3 => 30, 4 => 40}




// object 자료형을 맵으로 변환하기
let temp2 = new Map(Object.entries({ one: 1, two: 2 }));
// entries() 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환합니다.
console.log(temp2);
// Map(2) {'one' => 1, 'two' => 2}


// 반대의 경우
const temp3 = Object.fromEntries(temp2);
// Object.fromEntries() 메서드는 키값 쌍의 목록을 객체로 바꿉니다.
console.log(temp3);
// {one: 1, two: 2}




