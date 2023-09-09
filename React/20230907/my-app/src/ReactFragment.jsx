import React from 'react';

const arr = [1,2,3,4,5,6];

function ReactFragment(){
    const myArr = arr.map((item)=>{
        return (
        <React.Fragment key={item}>
            <dt>숫자</dt>
            <dd>{item}</dd>
        </React.Fragment>
        )
    });


    return(
    <React.Fragment className="hello">
        {/* 
        React Fragments 요소는 화면에 랜더링 되지 않기 때문에 스타일과 관련된 속성을 사용하는것은 무의미하며 보통 리스트 아이템의 key 값을 설정할 때 많이 사용. 단축 문법으로 사용할때는 props를 사용할 수 없다.
        */}
        <h1>hello</h1>
        <h2>라이캣!</h2>
        <dl>
            {myArr}
        </dl>
    </React.Fragment>
    );
}

export default ReactFragment;