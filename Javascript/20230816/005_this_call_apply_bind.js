
/ * this */
// this : this라는 키워드를 가지고 있는 함수, 메서드를 호출하는 객체
function sayName() {
    console.log(this.name);
}

var name = 'Hero';
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있음
// 때문에 window.name === "Hero" 가 성립
let peter = {
    name: 'Peter Parker',
    sayName: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    sayName: sayName
}

/* sayName() 함수를 실행했을 때와
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교 */
sayName(); // Hero
peter.sayName(); // Peter Parker
bruce.sayName(); // Bruce Wayne





/* this 사용 예시 */

let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());




// this는 함수가 만들어질 때가 아닌 실행될 때 그 값이 결정됨

function sayName() {
    console.log(this.name);
}
var name = 'Hero';

let peter = {
    name: 'Peter Parker',
    sayName: sayName
};

let bruce = {
    name: 'Bruce Wayne',
    sayName: peter.sayName
};

bruce.sayName(); // Bruce Wayne





// this 값 조작하기
// call() - call() 메서드의 인수에 this로 사용할 값을 전달할 수 있음
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce); // Bruce Wayne

// 아규먼트 전달도 가능
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); // Bruce Wayne!



// apply() - 아규먼트를 단일한 배열로 전달
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);
// Bruce Wayne is batman or richman

// 인자가 배열이면 어플라이 (어플라이는 무조건 배열로 보내야함)
// 함수의 인자가 어떤 형식이 필요한지에따라 콜과 어플라이중 선택해서 사용한다.

// call을 사용했을 경우 - 배열을 풀어서 넣음
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.call(bruce, 'batman', 'richman');


// bind() - this가 고정된 새로운 함수를 반환
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}

peter.sayName(); // bruce
bruce.sayName(); // bruce
