function test(a, b, c) {
    return a + b + c
}

test(10, 20) // 아규먼트 갯수가 파라미터 갯수보다 적으면 없는 갯수만큼 undefined로 나옴. 10 20 undefined --> NaN
test(10, 20, 30, 40) // 아규먼트 갯수가 더 많으면 제대로 작동.

function test(a = 10, b = 20, c = 30) { // 파라미터에 선언된 디폴트값으로 아규먼트에 아무것도 안넣으면 해당값이 출력됨
    console.log(a, b, c)
    return a + b + c
}

test(100, 200)
test()

// 혼란의 도가니
test(a = 100, b = 200) //330
test(b = 100, c = 200) //300 왜..? 
// javascript는 값을 순서대로 넣는다.
// test(100, , 200) 는 error

// 이것을 해결하기 위해 RORO로 기법이 등장
// RORO: 객체로 받고 객체로 반환한다(Receive an object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
    // scene: 스토리신, 플레이신, 엔딩신
    // x, y: 몹의 위치
    // texture: 몹의 이름
    // animKey: 몹의 애니메이션
    // initHp: 몹의 체력
    // dropRate: 몹이 아이템을 떨어뜨리는 확률
    return
}


// 위 문제와 아래 문제를 해결하기 위해 RORO을 사용할 수 있습니다.
// mob('플레이신', 100, 200, '슬라임', '슬라임_애니', 100, 0.1)
// mob('플레이신', ...뭐가 들어가야하지?)

function player({ scene, x, y, texture, animKey, initHp, dropRate }) {
    console.log(scene, x, y, texture, animKey, initHp, dropRate)
    return
}

// 아래와 같이 작성되기 때문에 2번째 문제 해결, 순서도 상관없습니다.
player({
    scene: '플레이신',
    y: 200,
    x: 100,
    texture: '슬라임',
    animKey: '슬라임_애니',
    initHp: 100,
    dropRate: 0.1
})

// 아래와 같이 작성되기 때문에 1번째 문제 해결
player({
    scene: '플레이신',
    y: 200,
    initHp: 100,
})

// 기본값 설정하는 방법
function player({ scene = '플레이신', x = 0, y = 0, texture, animKey, initHp, dropRate = 0.1 }) {
    console.log(scene, x, y, initHp)
}

player({
    initHp: 100,
})