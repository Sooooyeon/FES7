// 생성자 만들기, 프로토타입 분리 연습
function ReadingBook(book, author) {
    this.bookName = book;
    this.authorName = author;
};

ReadingBook.prototype.borrowed = function () {
    console.log(`책 이름 : ${this.bookName}, 작가명: ${this.authorName} 은(는) 대여중입니다.`)
};

ReadingBook.prototype.borrowCount = function (count) {
    count.borrowBook();
};

const book = new ReadingBook('부의 추월차선', '엠제이 드마코');
book.borrowed();



function Person() {
    this.대여중인책 = 0;
}

Person.prototype.borrowBook = function () {
    this.대여중인책++;
}

const soo = new Person();

book.borrowCount(soo);
book.borrowCount(soo);

console.log(soo);






/////////////


// 프로퍼티 상속
// call 메서드를 통해 Parent의 프로퍼티를 상속받을 수 있다.


function Parent() {
    this.name = '수연';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

function Child() {
    Parent.call(this)
    // 여기서의 this는 Child의 인스턴스
    this.newName = '아리';
}


// Object.create 메소드를 통해 프로토타입을 연결
Child.prototype = Object.create(Parent.prototype);


// 상속받는 자식만의 메서드나 프로퍼티를 만드는 것도 가능.
Child.prototype.hello = function () {
    console.log('hello');
};

const child = new Child();

console.log(child.name); // '수연'
console.log(child.newName); // '아리'
console.log(child.hello());



////////////////////

// 클래스 만들기
class Noteook {
    constructor(brand, ram, storage) {
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
    }
    performance() {
        console.log(`이 노트북의 브랜드는 ${this.brand}, RAM은 ${this.ram}GB, 용량은 ${this.storage}GB 입니다.`)
    }

    searching(word) {
        word.count();
    }
}

const sooMac = new Noteook('apple', 16, 256);

class Search {
    constructor(word) {
        this.searchWord = word
        this.searchCount = 0;
    }

    count() {
        this.searchCount++;
    }
}

const pizzaSearch = new Search('피자');

sooMac.searching(pizzaSearch);
sooMac.searching(pizzaSearch);

console.log(sooMac);
console.log(sooMac.performance());
console.log(pizzaSearch);



// 클래스 상속 - extends 사용

class NoteBookInfo extends Noteook {
    constructor(brand, ram, storage) {
        super(brand, ram, storage);
    }

    info() {
        this.performance();
    }

}

const yeonNotebook = new NoteBookInfo('삼성', 16, 256);

console.log(yeonNotebook);
console.log(yeonNotebook.info());




// 불맛나는 소시지 만들기 실습

//  실습 : 소시지를 만드는 클래스를 정의해봅시다.

// 1. 생성자 함수는 두 가지 매개변수를 전달 받을 수 있으며 전달되는 매개변수에 따라 소시지의 맛이 결정됩니다.

// 2. 소시지 객체는 taste 라는 메서드가 존재합니다.생성자함수에서 전달받은 재료에 따라 맛을 나타내는 콘솔로그를 출력하는 역할을 합니다. (예시 : ‘소고기’ 와 ‘파’ 를 매개변수로 전달하였을 경우, ‘소고기와 파 맛이 난다!’ 는 콘솔 메세지를 출력합니다.)
class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    taste() {
        console.log(`${this.taste1}와 ${this.taste2} 맛이 나는 소시지 입니다!`)
    }
}

const makeSausage = new Sausage('소고기', '파');
makeSausage.taste();


// 3. 소시지 클래스를 상속받는 FiresSausage 파생클래스를 생성해봅니다.파생클래스의 taste 메서드를 실행하면 콘솔 메세지에 불맛이 나기 시작합니다.

// 오버라이딩, 오버로딩 사용 코드 
class FiresSausage extends Sausage {
    taste(msg) {
        // 조건문을 사용해 만든 오버로딩 테크닉. 전달인자에 따라 다른 결과를 처리하도록 만들어 준다.
        if (msg) {
            console.log(`${this.taste1}와 ${this.taste2} 맛이 나는 소시지에 ${msg}이 더해졌습니다!!`)
        } else {
            console.log(`${this.taste1}와 ${this.taste2} 맛이 나는 소시지 입니다!`)
        }
    }
}

const firesSausage = new FiresSausage('불고기', '청양고추');
firesSausage.taste('불맛');

// private 프로퍼티 접근, 수정
class UserInfo {
    #password
    #phoneNumber

    constructor(name, password, phoneNum) {
        this.name = name;
        this.#password = password;
        this.#phoneNumber = phoneNum;
    }

    get password() {
        return this.#password
    }

    set password(pw) {
        this.#password = pw;
    }
}

const person = new UserInfo('수연', 123123, '010-1234-5678');

console.log(person)
// #키위드를 사용한 프로퍼티들은 콘솔창에 출력되지 않음
// 출력 - UserInfo { name: '수연' }
console.log(person.name);

// get 
console.log(person.password);

// set
person.password = 456456;

// get
console.log(person.password);
