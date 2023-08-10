
// sort 유니코드의 순서대로 정렬
// 컴페어함수 -> sort 메서드 안에서 실행되는 함수


const avengers = ['spiderman', 'ironman', 'hulk', 'thor']
avengers.sort(function (a, b) {

    if (a < b) {
        return -1;
        // 알파벳 순서대로 보고 비교
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
});


const student = [
    {
        id: 1, product: '연필', stock: 10
    },
    {
        id: 2, product: '지우개', stock: 33
    },
    {
        id: 3, product: '체육복', stock: 2
    },
    {
        id: 4, product: '만연필', stock: 5
    },
    {
        id: 5, product: '책받침', stock: 100
    }
];

student.sort(function (a, b) {
    if (a.product < b.product) {
        return -1
    } else if (b.product < a.product) {
        return 1
    } else {
        return 0
    }

});



student.sort()

const numbers = [1, 4, 2, 3, 5, 6];
numbers.sort(function (a, b) {
    return a - b;
});
