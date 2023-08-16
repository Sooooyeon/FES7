// this 정리
// 1. 메서드로 호출한 경우 this는 멤버접근연산자 앞의 객체를 가르킵니다.
// 2. 함수로 호출할 경우 this는 window(node는 global)를 가르킵니다.
// 3. 화살표 함수의 경우 this는 상위스코프를 가르킵니다.
// 4. 생성자 함수 혹은 class의 경우 this는 인스턴스를 가르킵니다.


////////////////////////////////////////


// this는 객체를 가리키는 참조 변수이며, 호출되는 위치에 따라 다른 값을 출력해 혼란을 준다.

// 어떤 객체의 메소드가 아닌 단독 호출되는 함수의 this는 전역공간을 참조하게 된다.

function a() { console.log(this) }
a(); // Window



let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}
myObj.func1(); // {val1: 100, func1: ƒ}



let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

let test = myObj.func1;
test() // Window
// test 함수는 전역 공간에서 호출되었기 때문에 this는 윈도우가 됨
