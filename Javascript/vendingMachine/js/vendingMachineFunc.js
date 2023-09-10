class VendingMachineFunc{
    constructor(){
        // section1 요소 선택
        const vMachine = document.querySelector('.section1');

        // this는 클래스로 생성한 인스턴스를 가리킴
        // 잔액
        this.balance = vMachine.querySelector('.bg-box p')
        // 콜라 리스트
        this.itemList = vMachine.querySelector('.cola-list');
        // 입금액
        this.inputCostEl = vMachine.querySelector('#input-money');
        // 입금 버튼
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        // 거스름돈 반환 버튼
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        // 획득 버튼
        this.btnGet = vMachine.querySelector('.btn-get');
        // 장바구니 목록
        this.stagedList = vMachine.querySelector('.get-list');

        

        // section2 요소 선택
        const myInfo = document.querySelector('.section2')
        // 소지금액
        this.myMoney = myInfo.querySelector('.bg-box p');



        // section3 요소 선택
        const getInfo = document.querySelector('.section3');
        // 획득한 음료 목록
        this.getList = getInfo.querySelector('.get-list');
        // 음료들의 총금액
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    setup(){
        this.bindEvents();
    }

    // 장바구니 목록 생성 함수
    stagedItemGenerator(target){
        const stagedItem = document.createElement('li');
        stagedItem.dataset.item = target.dataset.item;
        stagedItem.dataset.img = target.dataset.img;
        stagedItem.dataset.price = target.dataset.price;
        stagedItem.innerHTML = `<img src="./images/${target.dataset.img}" alt="">${target.dataset.item}<strong>1<span class="a11y-hidden">개</span></strong>`
        this.stagedList.append(stagedItem);
    }


    // 이벤트 붙이기
    bindEvents(){
        /**
         * 1. 입금 버튼 기능
         * 소지금 === 소지금 - 입금액
         * 잔액 === 기존잔액 + 입금액
         * 입금액이 소지금보다 많으면 "소지금이 부족합니다." 알림창을 띄운다.
         * 입금액 인풋창은 입금 버튼을 누르면 초기화 되어야한다.
         */
        
        this.btnPut.addEventListener('click',(event)=>{
            // 사용자 입력값
            const inputCost = parseInt(this.inputCostEl.value);
            // 현재 사용자가 가진 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
            // 현재 자판기에 표시된 잔액
            const balanceval = parseInt(this.balance.textContent.replaceAll(',',''));

            console.log('입금 버튼 click');

            // 입금액이 있고, 그 금액이 소지금보다 적거나 같다면
            if(inputCost && inputCost>0){
                if(inputCost <= myMoneyVal){

                    // Intl 객체를 통해서 사용자 국가에서 사용하는 포멧르로 숫자를 변경
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';

                    this.balance.textContent = new Intl.NumberFormat().format((balanceval? balanceval : 0)+inputCost) + '원';
                } else{
                    alert('소지금이 부족합니다.')
                }
                // 사용자가 입력한 입금액을 초기화
                this.inputCostEl.value = null;
            } else{alert('돈을 입금해주세요!')}
        })


        /**
         * 2. 거스름돈 반환 기능 만들기
         * 반환 버튼을 누르면 소지금 === 소지금 + 잔액
         * 잔액창은 초기화
         */

        this.btnReturn.addEventListener('click',()=>{
            // 현재 사용자가 가진 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));

            // 현재 자판기에 입금된 금액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));

            if(balanceVal){
                this.myMoney.textContent = Intl.NumberFormat().format(myMoneyVal + balanceVal) + '원';
                this.balance.textContent = null;
            }
        })


        /**
         * 3. 자판기 메뉴 기능
         * 콜라를 누르면 잔액 === 잔액 - 콜라 가격
         * 콜라 가격보다 잔액이 적다면 '잔액이 부족합니다.' 알림창 출력
         * 콜라가 장바구니에 담겨야 함
         * 콜라가 장바구니에 담길 경우 data-count 값이 -1 됨
         * 콜라의 data-count 값이 0이 될 경우 품절 표시가 되어야 한다.
         * 만약 data-count 값이 0이라면 button 요소에 disabled 속성이 추가되고, 콜라 템플릿에 strong 태그가 추가되어야 한다.
         */

        const colaBtn = this.itemList.querySelectorAll('button');
        console.log(colaBtn);
        colaBtn.forEach((colaBtn)=>{
            colaBtn.addEventListener('click',(e)=>{
                console.log(2);

                // 현재 잔액
                const balanceVal = parseInt(this.balance.textContent.replaceAll(",",''));

                // 클릭한 콜라의 가격
                const targetElPrice = parseInt(colaBtn.dataset.price);

                // 장바구니 목록
                const stagedListItem = this.stagedList.querySelectorAll('li')

                // 장바구니에 있는지를 확인하는 불리언 값
                let isStaged = false;

                // 잔액이 콜라 가격보다 많거나 동일하다면
                if(balanceVal >= targetElPrice){
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

                    for(const item of stagedListItem){
                        if(item.dataset.item === colaBtn.dataset.item){
                            const itemTxt = item.querySelector('strong');
                            // 같은 콜라를 장바구니에 담을 경우 해당 콜라의 카운트를 1증가
                            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent)+1;
                            isStaged = true;
                            break;
                        }
                    }

                    // 만약 처음 선택한 콜라라면 콜라를 장바구니에 담기
                    if(!isStaged){
                        this.stagedItemGenerator(colaBtn);
                    };
                    colaBtn.dataset.count--;

                    // 만약 콜라의 카운트가 0이라면
                    if(parseInt(colaBtn.dataset.count)===0){
                        // disabled 속성 추가 + strong 품절 태그 추가
                        colaBtn.disabled = true;
                        colaBtn.insertAdjacentHTML('afterbegin','<strong class="soldout">품절</strong>');
                    }

                } else{
                    alert('잔액이 부족합니다. 돈을 더 입금해주세요.')
                }


            });
        })

        /**
         * 4. 획득 버튼 기능
         * 획득 버튼을 누르면 장바구니에 담긴 음료수 목록이 획득한 음료 목록으로 이동한다.
         * 획득함 음료의 금액을 모두 합해 총 금액을 업데이트 한다.
         */

        this.btnGet.addEventListener('click',()=>{
            const itemStagedList = this.stagedList.querySelectorAll('li');
            const itemGetList = this.getList.querySelectorAll('li');
            let totalPrice = 0;

            for(const itemStaged of itemStagedList){
                let isStaged = false;
                for(const itemGet of itemGetList){
                    // 장바구니의 콜라가 이미 획득한 음료 리스트에 있다면
                    if(itemStaged.dataset.item === itemGet.dataset.item){
                        const itemTxt = itemGet.querySelector('strong');
                        // 같은 콜라를 획득 할 경우 획득 음료 해당 콜라의 카운트를 장바구니에 담은 수량만큼 증가
                        itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent)+parseInt(itemStaged.querySelector('strong').firstChild.textContent);
                        isStaged = true;
                        break;
                    }
                }
                if(!isStaged){
                    this.getList.append(itemStaged);
                }
            }
            // 장바구니 목록 비우기
            this.stagedList.innerHTML = null;

            // 획득한 음료 리스트를 순회하면서 총 금액을 계산
            this.getList.querySelectorAll('li').
                forEach((itemGet)=>{
                    totalPrice += itemGet.dataset.price * (itemGet.querySelector('strong').firstChild.textContent);
                });
                
                this.txtTotal.textContent = `총 금액 ${new Intl.NumberFormat().format(totalPrice)}`;
        });
    }

}


export default VendingMachineFunc;