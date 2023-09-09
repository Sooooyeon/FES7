import React from 'react';

const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function FragmentSample(){
    const myArr = items.map((item)=>{
        return (
        <React.Fragment key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.desc}</dd>
        </React.Fragment>
        )
    });

    return(
        <React.Fragment>
        <dl>
            {myArr}
        </dl>
    </React.Fragment>
    );
}

export default FragmentSample;