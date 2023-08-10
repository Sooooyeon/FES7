let num = 0;
while (num < 11) {
    document.write(num, '<br>');
    num += 1;
}



let input;
do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));
console.log("입력한 숫자는 " + input + "입니다.");



// break 예시 1
let num = 0;
while (num < 11) {
    num++;
    document.write(num, '<br>');
    if (num > 5) {
        break;
    }
}

// break 예시 2
let i = 0;
while (i < 100) {
    i++;
    console.log(i + '살 입니다.');
    if (i === 14) {
        console.log(i + '살 부터 중학생이 됩니다.');
        break;
    }
}
console.log('중학교 입학을 축하합니다');




// label구문은 break나 continue구문과 함께 사용할 수 있다.

// break
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break outer;
        }
        console.log(i, j);
    }
}

// continue
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            continue outer;
        }
        console.log(i, j);
    }
}




// while문 문제
// 사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다. 만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.

const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 }
];


// 정답

let i = 0;
while (i < menu.length) {
    menu[i].num = i;
    i++;
}
const choice = prompt("메뉴 번호를 입력하세요")
if (choice === menu.num[i]) {
    console.log(menu[choice]);
} else {
    return '종료합니다.'
}




let i = menu.indexOf
while (i === menu.length) {
    console.log()
}

