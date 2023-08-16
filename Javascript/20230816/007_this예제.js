let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
};

function 인세계산함수(e) {
    return e * (this.책 / 100)
};

[100, 200, 300].map(인세계산함수, 인세규정); // [10, 20, 30]






let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
};

[100, 200, 300].map(e => e * (this.책 / 100), 인세규정); // [NaN, NaN, NaN]
[100, 200, 300].map(e => this, 인세규정); // [Window, Window, Window]
// 화살표 함수가 전역함수이므로 디스가 윈도우를 가리키고있음












function attackBeam() { // 레이저 공격
    this.hp -= 20
}

function attackKnife() { // 칼공격
    if (this.name === 'thanos') {
        this.hp -= 1
        return
    }
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 1000,
    power: 100
}

jombi.damaged1() // Beam
jombi.damaged2() // Knife
jombi.hp // 9975
