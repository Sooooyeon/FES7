class ColaGenerator{
    constructor(){
        this.itemList = document.querySelector('.cola-list');
    }

    async loadData(){
        try{
            const response = await fetch('./items.json');
            if(!response.ok){
                throw new Error('HTTP ERROR!! :'+ response.status);
            }
            return await response.json();
        }
        catch(error){
            console.log('콜라데이터를 로딩하는중 문제가 발생했습니다 :' + error)
        }
    }

    async setup(){
        const response = await this.loadData();
        this.colaFactory(response);
    }

    colaFactory(data){
        const docFrag = new DocumentFragment();
        data.forEach((el)=>{
            const item = document.createElement('li');
            const itemTemplate = `<button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                        <img src="./images/${el.img}" alt="${el.name}"><span class="cola-name">${el.name}</span><strong
                            class="cola-price">${el.cost}원</strong>
                    </button>`
            item.innerHTML = itemTemplate;
            docFrag.append(item);
        });
        this.itemList.append(docFrag);
    }
}


export default ColaGenerator;