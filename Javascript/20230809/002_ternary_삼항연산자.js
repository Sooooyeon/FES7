
// 문제
// 사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요.

// 성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다.

// prompt로 받는 값은 기본적으로 문자열
const score = parseFloat(prompt("성적을 입력하세요"));

if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else {
    console.log('강해져서 돌아와라');
}




const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : '강해져서 돌아와라';
console.log(grade);

