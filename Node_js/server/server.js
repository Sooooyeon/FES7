
const http = require('http');

http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200);
            res.end("main url");
        } else if (req.url === "/upload") {
            res.writeHead(200);
            res.end("upload url");
        } else if (req.url === "/delete") {
            res.writeHead(200);
            res.end("delete url");
        } else {
            res.writeHead(404);
            res.end("Not found!");

        }
    }).listen(3000, () => {
        console.log('3000번 포트 서버 접속 완료')
    });








// const http = require('http');
// // http 패키지를 불러와서 사용하겠다는 의미

// http.createServer((req, res) => {
// // 서버 생성 후 생성 함수로 요청과 응답을 진행 살 수 있게 함

//     // 상태코드와 타입 명시
//     res.writeHead(200, { "Content-Type": "text/html" });


//     // 응답보낼 코드 작성
//     res.end('<p>Hello world!</p>');


// }).listen(3000, () => {
//     // 서버를 실행하는 코드
//     console.log('3000번 포트 서버 접속 완료')
// });

// localhost - 현재 컴퓨터의 내부 주소(서버 개발 시 테스트용으로 많이 사용)
// localhost 은 127.0.0.1 와 같은 의미
// 127.0.0.1 은 IP(Internet Protocol)
// port는 서버내의 프로세스를 구분하는 번호 (서버의 다양한 기능을 처리할 수 있도록 포트로 분리)