import './ListRender.css';

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function ListRender(){
    // key props
    // 리스트 아이템에는 key 값이 필요! key props을 사용하면 리스트에 변화가 발생했을 때 React가 엘리먼트의 변경사항을 빠르게 감지하고, 렌더링을 최적화할 수 있다. 보통 배열을 순회하면서 각각의 항목을 <li> 엘리먼트로 렌더링할 때, 각 항목에 key prop을 제공한다. key prop을 제공하지 않으면 React가 렌더링을 최적화하지 못하고, 업데이트 성능이 저하될 수 있다.
    const areas =list.map((item,index)=>{
        return(
            <li key={index} className={item.visited ? 'visited':''}>{item.area}</li>
        )
    })
}

return(
    <ul className="listArea">
        {areas}
    </ul>
)

export default ListRender;