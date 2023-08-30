function sayHello() {
    return new Promise((resolve, reject) => {
        resolve('hello!');
    });
}

async function test() {
    const hello1 = await sayHello();
    // await - 먼저 실행하겠다는 의미
    console.log(hello1);
}

test();