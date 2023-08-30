// pending // 대기상태
// pulfilled // 이행상태
// rejected // 실패상태

function sayHello() {
    return new Promise((resolve, reject) => {
        resolve('hello!');
        // reject(new Error());
    });
}
sayHello()
    .then((resolveData) => {
        // Promise는 하나의 함수를 실행하고 연속적으로 then을 통해서 일련의 흐름을 제어하게 하는 문법
        console.log(resolveData);
        return resolveData;
    })
    .then((resolveData) => {
        console.log(resolveData);
        return resolveData;
    })
    .then((resolveData) => {
        console.log(resolveData);
        return resolveData;
    })
    // .catch((error) => {
    //     console.log(error);
    // });