
const person = {
    name: "재현",
    age: 20,
    gender: 'male'
};

const props = Object.keys(person)
console.log(props)



for (let i = 0; i < props.length; i++) {
    console.log(`key: ${props[i]}, value: ${person[props[i]]}`)
    // 문자열이어서 대괄호 연산자를 사용해야함
}


