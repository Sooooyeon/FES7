// 기존코드

function lottoGenerator() {
    const lottArr = [];

    while (lottArr.length < 6) {
        const result = parseInt(Math.random() * 45 + 1);

        if (!lottArr.includes(result)) {
            lottArr.push(result);
        }
    }

    return lottArr;
}




/// set 사용해 코드 수정

function lottoGenerator() {
    const lottoSet = new Set();

    while (lottoSet.size < 6) {
        const result = parseInt(Math.random() * 45 + 1);
        lottoSet.add(result);
    }

    return lottoSet;
}