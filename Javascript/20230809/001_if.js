let price = 5000;
const text = `hello ${(price > 6000) ? '비싸요!' : (price < 3000) ? '엄청싸요!' : '적당해요!'}`;

console.log(text);

let message = '';

if (price > 6000) {
    message = '비싸요!';
} else if (price < 3000) {
    message = '엄청싸요!';
} else {
    message = '적당해요!';
}

const text2 = `hello ${message}`;



let score = 69;
let money = 1000;

if (score > 90) {
    document.write('참 잘했습니다!<br>');
    money += 100000
} else if (score > 80) {
    document.write('잘했습니다!<br>');
    money += 10000
} else if (score > 70) {
    document.write('했습니다!<br>');
    money += 1000
} else {
    money = 0
}


// if를 연달아 사용해 분리된 if문을 만들면 첫번째를 만족한다고 끝나지 않고 다음 명령 실행
if (score > 90) {
    document.write('참 잘했습니다!<br>');
    money += 100000
} if (score > 80) {
    document.write('잘했습니다!<br>');
    money += 10000
} if (score > 70) {
    document.write('했습니다!<br>');
    money += 1000
}
else {
    money = 0
}

document.write(money);


// 문제 
//사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 나이가 18세 이상이면 "안녕하세요!"를 출력하고, 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 출력하며, 10세 미만이면 “부럽다…” 를 출력합니다.

const age = prompt("나이를 입력해주세요 : ");

function myFunc() {
    var temp3 = 20;
}

if (true) {
    let temp = 20;
    const temp2 = 20;
}

if (age >= 18) {
    console.log('안녕하세요!')
} else if (age >= 10) {
    console.log('안녕! 반가워 꼬마친구!')
} else {
    console.log('부럽다...')
}



let item = true ? 100 : 200;
console.log(item);

let itme2 = true ? console.log('true') : console.log('false')
