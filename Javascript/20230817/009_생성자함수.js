// 인스턴스 - 생성자 함수의 리턴한 객체를 의미
// 생성자 함수는 사용자 정의 객체를 생성할 때 사용되는 함수
// new 연산자를 사용하지 않을 경우 this는 윈도우가 됨
// 반드시 new 연산자를 붙여 실행. new 연산자는 생성자 함수의 this 가 인스턴스를 바라보도록 만들어주는 역할을 함
// 일반 함수와 구분하기 위해 생성자 함수 이름 첫 글자는 대문자로 시작

// 생성자 함수를 사용하는 이유
// 동일한 프로퍼티를 가지는 객체 생성
// prototype을 이용하여 메모리 효율을 높일 수 있음



let book = {
    책이름: '알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라',
    책가격: 0,
    저자: ['구나영', '김경림'],
    출판일: '2022.08.12'
}
// 책이 100권이라면?


function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    this.read = function () {
        console.log('reading....');
    }
}

let book1 = new Book('JS', 0, ['이호준'], '2099.10.30')
let book2 = new Book('Python', 100000, ['이호준'], '2099.11.30')
let book3 = new Book('React', 1000000, ['이호준'], '2099.12.30')

console.log(book1, book2, book3)






// 응용. 생성자 함수 + 클로저
function Food(like, hate) {
    this.like = like;
    this.hate = hate;
}
function value(soso, like, hate) {
    const newFood = new Food(like, hate);
    return {
        soso: soso,
        getFood() {
            return newFood;
        },
        setFood(like) {
            newFood.like = like;
        }
    }
}
const man = value('마라탕', '제육볶음', '떡볶이');
console.log(man); // {soso: '마라탕', getFood: ƒ, setFood: ƒ}
man.getFood(); // Food {like: '제육볶음', hate: '떡볶이'}
const woman = value('마라탕', '샌드위치', '소대창');
woman.getFood();