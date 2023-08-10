
//  로또함수 만들기 1~45 중복없이 6개


// 나의 정답
function lotto() {
    const array = [];

    while (array.length < 6) {
        let num = Math.floor(Math.random() * 45 + 1);
        if (array.indexOf(num) === -1) {
            array.push(num);
        }
    }
    return array
}


// 풀이
function lottoGenerator() {
    const lottArr = [];

    while (lottArr.length < 6) {
        const result = parseInt(Math.random() * 45 + 1);

        if (!lottArr.includes(result)) {
            lottArr.push(result);
        }
    }

    return lottArr;
}







Math.random(); // 0~1 사이의 실수

Math.floor(Math.random() * 45 + 1) // 