new Date();

const time = new Date();

time.getDate();
// 현지 시간에 따라, 주어진 날짜의 일에 해당하는 1이상, 31이하의 정수

time.getFullYear();
// 주어진 날짜의 현지 시간 기준 연도를 반환

time.getDay();
//  현지 Date시간에 따라 이 날짜의 요일을 반환. 여기서 0은 일요일을 나타냄


// 스위치문 안에는 표현식이 와야함 (스테이트먼트 - 조건문, 익스프레션 - 표현식)
switch (new Date().getDay()) {
    case 1:
        document.write('월요일입니다.');
        break;
    case 2:
        document.write('화요일입니다.');
        break;
    case 3:
        document.write('수요일입니다.');
        break;
    case 4:
        document.write('목요일입니다.');
        break;
    case 5:
        document.write('금요일입니다.');
        break;
    default:
        document.write('금금요일입니다. 주말이 뭐죠?');
        break;
}


// break가 없다면 switch문을 탈출하지 않고 모든 코드들을 순서대로 실행
let price = 0;
let menu = '카페라떼';

switch (menu) {
    case '아메리카노':
        price = 4000;
    case '카페라떼':
        price = 5000;
    case '바닐라라떼':
        price = 6000;
    case '콜드브루':
        price = 5500;
    case '딸기라떼':
        price = 7000;
    case '레몬에이드':
        price = 6500;
    case '에스프레소':
        price = 3500;
    case '루이보스':
        price = 4500;
    default:
        console.log('메뉴를 정확히 입력하세요.');
}



// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요. 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.

const score = parseInt(prompt('점수를 입력하세요'));
// ture인 것을 반환해야하니까 case에서 조건식을 만족해 true이면 콘솔값 출력
switch (true) {
    case score >= 90:
        console.log('A')
        break;
    case score >= 80:
        console.log('B')
        break;
    case score >= 70:
        console.log('C')
        break;
    case score >= 60:
        console.log('D')
        break;
    default:
        console.log('강해져서 돌아와라')
        break;

};



const score = parseInt(prompt('점수를 입력하세요'));
// 0을 입력할경우 처음이 표현식이 false이고 첫번째 케이스도 입력값이 0이라 false이므로 A가 출력됨
const score = parseInt(prompt('점수를 입력하세요'));
switch (!!score) {
    case score >= 90:
        console.log('A')
        break;
    case score >= 80:
        console.log('B')
        break;
    case score >= 70:
        console.log('C')
        break;
    case score >= 60:
        console.log('D')
        break;
    default:
        console.log('강해져서 돌아와라')
        break;

};