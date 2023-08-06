// 값이 변경이 되었지만 화살표가 달라지지 않았고
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);

arr1[0] = 10;
// arr1 = [10, 2, 3];
console.log(arr2);

// 비교해보세요.
// 값이 변경이 되었고 화살표도 달라졌습니다.
let value1 = 10;
let value2 = value1;
console.log(value2);

value1 = 20;
console.log(value2);
// value1은 20이 있는 새로운 공간을 가리키게 된다. value2는 재선언 하지 않았지 때문에 value1이 이전에 가리키고있던 곳을 여전히 가리키고 있다. 따라서 value2를 출력할 경우 10이 출력된다.