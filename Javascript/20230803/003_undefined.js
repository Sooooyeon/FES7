let a;
console.log(a);

if (typeof a === "undefined") {
    console.log('a에 아무것도 할당되지 않았습니다!')
    // 변수 선언시 a에 값을 할당하지 않아 a는 undefined 상태, 따라서 true로 console값이 출력됨 
}

if (!a) {
    console.log('a에 아무것도 할당되지 않았습니다!')
    // 변수 선언시 a에 값을 할당하지 않아 a는 undefined 상태로 false였으나 부정으로 true 따라서 console값이 출력됨 
}