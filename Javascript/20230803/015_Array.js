// 1. array의 여러가지 형태
let arr1 = []

let arr2 = [1, 2, 3]

let arr3 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
arr3[0] // [1, 2, 3]
arr3[1] // [4, 5, 6]
arr3[2] // [7, 8, 9]
arr3[1][2] // 6

let arr4 = ['leehojun', 10, 180] // 이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하진 않는다.
arr4[0] // 'leehojun'
arr4[0][3] // 'h'

// 2. array에 길이 출력
let arr5 = [1, 2, 3]
arr5.length // 3
arr5.length = 100
arr5 // [1, 2, 3, empty × 97]
arr5[10] = null
arr5 // [1, 2, 3, empty × 7, null, empty × 89]

let arr6 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
arr6.length // 3
arr6.flat().length // 9

let arr7 = [[[10, 20], [10, [10, 20]], 3],
[[10, 20], [10, [10, 20]], 6],
[[10, 20], [10, [10, 20]], 9]]
arr7.flat()
arr7.flat().flat().flat()
arr7.flat(3)
arr7.flat(Infinity) // 가장 깔끔! depth 헷갈려도 모두 출력.