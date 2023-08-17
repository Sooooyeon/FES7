// 콜백함수 - 함수가 실행될때 인자로 전달되는 함수


function sum(x, y, 콜백함수) {
    콜백함수(x + y);
    return x + y;
}

function documentWriter(s) {
    document.write('콜백함수', s);
}

sum(10, 20, documentWriter);


// map 의 사용을 통한 콜백함수
let arr = [1, 2, 3, 4, 5];
arr.map(제곱)

function 제곱(x) {
    return x ** 2
}

arr.map(x => x ** 2)


//  forEach의 사용을 통한 콜백함수
let arr = [1, 2, 3, 4, 5];
arr.forEach(e => console.log(제곱(e)));

function 제곱(x) {
    console.log(x ** 2)
}