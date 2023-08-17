const outer = function () {
    let a = 1;
    const inner = function () {
        let b = 5;
        let c = 6;
        a = a + b + c;

        console.log(a);
    }
    inner();
}
outer();




const outer = function () {
    let a = 1;
    const inner = function () {
        let b = 5;
        let c = 6;
        a = a + b + c;

        console.log(a);
    }
    return inner();
}
const newInner = outer();
newInner()


// 함수는 실행이 끝나면 종료되는것이 맞는데 .. 참조되는 값 자체는 남아있게 된다.  따라서 a의 값은 inner함수를 제외하고는 다른 것들은 접근이 불가. inner함수는 outer함수의 스코프를 기억하고 잇어서 함수가 종료되었다고 하더라도 참조 된 값을 사용할 수 있음. 이러한 공간을 클로저.. 라고 함..!




const person = function () {
    let age = 15;
    // 참조 된 값으로 함수가 종료되고 함수가 사라지는 경우에도 사라지지 않으며 return 객체 내의 함수에서만 참조가 가능해 안전한 값이 된다.
    // 폐쇄된 함수를 만들었기에 getAge를 통해서만 접근 가능하고 setAge를 통해서만 수정이 가능.

    return {
        name: 'soo',

        getAge: function () {
            return age;
        },
        setAge: function (val) {
            age = val;
        }
    }
}

const man = person();







// 클로저 - 외부에서 접근할 수 없는 공간을 만들어 변경이 되지 않아야하는 중요한 요소들의 관리가 가능하다.

// 외부 함수에 대한 접근 권한을 내부 함수에 위임함으로서 폐쇠된 공간 안의 데이터에 접근할 수 있도록 하는 테크닉

// 클로저를 사용하면 특정 변수나 함수를 외부에서 접근할 수 없도록 숨길 수 있다. 이를 통해 private 변수와 메서드를 구현할 수 있다.


// 응용 
const user = function (x) {
    let ID = "soo";
    return {
        name: x,
        getID() {
            return ID;
        },
        setID(newID) {
            ID = newID;
        },
    };
};

const userInfo = user("sy");
userInfo.setID("yeon");

console.log(userInfo); // {name: 'sy', getID: ƒ, setID: ƒ}
userInfo.getID(); // 'yeon'