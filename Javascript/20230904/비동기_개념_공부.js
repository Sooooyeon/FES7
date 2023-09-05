function time(callback, soo) {
    setTimeout(() => {
        const 시작 = Date.now();
        for (let k = 0; k < 100000000; k++) {

        }
        const 끝 = Date.now();
        console.log(끝 - 시작 + 'ms');
        callback();
        // soo();
    }, 0);
}

function callback(){
    console.log('작업이 끝났습니다.');
};
console.log('시작');
time(callback);

// 함수 호출 시 매개변수에 화살표 함수로 콜백함수를 바로 정의 할 수 있다.


const promise = new Promise((resolve,reject)=>{
    console.log("1번 손님 들어오세요.")
    // executor(제작코드, 실행함수) = 맛집
});



const snack = () => Promise.resolve('와, 맛있겠다!') // 4번

async function mySnack() {
    console.log('치즈 케이크 주세요!') // 3번
    const res = await snack() // 4번
    console.log(res) // 6번
}

console.log('주문하시겠어요?') // 1번
mySnack(); // 2번
console.log('주문하신 케이크 나왔습니다!') // 5번








function cook(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
}

const myCake = async () => {
		await cook(1000);
		return '케이크';
};

const myCoffee = async () => {
    await cook(500);
    return '커피';
};
const myCookie = async () => {
    await cook(5000);
    return '쿠키';
};

// async function asyncProcess() {
//     const cake = await myCake();
//     console.log(cake);
//     const coffee = await myCoffee();
//     console.log(coffee);
//     const cookie = await myCookie();
//     console.log(cookie);
// }

// asyncProcess(); 


async function promiseProcess() {
    const results = await Promise.all([myCake(), myCoffee(), myCookie()]);
    console.log(results);
}

promiseProcess();  



// fetch와 promise만을 사용해 작성한 코드
fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response => response.json())
.then(json=>console.log(json.email))
// Nathan@yesenia.net

// 위에 코드 async/await 사용해 바꾸기
async function getUserEmail(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const user = await(response.json());
    // JSON형태로 파싱된 응답 데이터 값이 변수 user에 저장
    const email = user.email;
    console.log(email)
}
getUserEmail(3)


const txt = fetch('https://reqres.in/api/products/3')
    .then(response => response.text())
    .then(text => console.log(text))



async function getImg(){
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg = await(response.blob());
	console.log(blobImg);
}
getImg()

//Promise
//Blob {size: 19055, type: 'image/jpeg'}
