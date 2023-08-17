// IIFE - 정의되자마자 즉시 실행

// 즉시 실행 함수는 이름을 넣을 필요가 없음 대부분 익명함수로 사용


// 익명 즉시 실행 함수

(function (a) {
        return a
    }('hello'));


(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());



// 화살표 함수로 사용한 경우
(() => {
    let a = 1;
    let b = 2;
    return a + b;
})
