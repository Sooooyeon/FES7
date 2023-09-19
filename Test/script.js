const start = document.querySelector('#start');

const hrs = document.querySelector('.hrs p')
const min = document.querySelector('.min p')
const sec = document.querySelector('.sec p')


start.addEventListener('click',()=>{
    const remainingTime = prompt('타이머에 설정할 시간을 /로 구분해 입력해주세요. 예) 07/24/36')

    const res = remainingTime.split('/')
    console.log(res)

    hrs.textContent = res[0];
    min.textContent = res[1];
    sec.textContent = res[2];


    setInterval(()=>res[2]-1,1000)

})


// 1초마다 시간 줄어들게 만들기