// this에 바인딩되는 객체가 동적으로 결정되는 기명함수와 달리 화살표 함수의 경우 상위 스코프의 this를 가리키며 이러한 방식을 렉시컬(Lexical) 스코프라고 부름

const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c();
        }
        b();
    }
}
person.a()

//출력
// { name: 'hojun', age: 25, a: ƒ }
// hojun

// Window { window: Window, self: Window, document: document, name: '', location: Location, … }
// ''

// Window { window: Window, self: Window, document: document, name: '', location: Location, … }
// ''

// b와 c는 메서드가 아닌 그냥 함수로 호출된것으로 윈도우가 나옴(어떠한 객체의 메서드로 실행되고 있는것이 아님 -> 함수의 this가 윈도우를 가리킴) 객체의 키 이름으로 접근해서 사용해야 해당 함수의 this값을 출력




// 화살표 함수일 경우 상위 스코프의 this를 가리킴
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

//출력
// { name: 'hojun', age: 25, a: ƒ }
// hojun

// { name: 'hojun', age: 25, a: ƒ }
// hojun

// { name: 'hojun', age: 25, a: ƒ }
// hojun


// 콜백함수의 this가 가리키는 것은?
[1, 2, 3].forEach(function () { console.log(this) }, [10, 20, 30])
// 두번째 인자의 값이 모두 값으로 들어감
// 출력
// [10, 20, 30]
// [10, 20, 30]
// [10, 20, 30]


[1, 2, 3].forEach(function () { console.log(this) })
// 콜백함수의 디스는 윈도우를 가리킴
// 출력
// Window
// Window
// Window

