import React, { useState } from 'react';

// function Resume(props){
//     return(
//         <div style={{border:"1px solid", width:"500px"}}>
//             <h1>{props.name} 자기소개서</h1>
//             <h2>{props.hello}</h2>
//             <h3>취미 : {props.hobby}</h3>
//             <h3>좋아하는 음식 : {props.food}</h3>
//             <h3>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h3>
//         </div>
//     );
// }

function Resume({hello, name, hobby, food, color}){ // 구조분해할당
    // let like = 0;

    // console.log("useState:", useState(0));

    const [like, setLike] = useState(0);
    // useState의 괄호 안에는 초기값을 넣을 수 있다. 0을 넣게 되면 like의 초기값은 0이 되고, ""을 넣게 되면 like의 초기값은 ""가 된다.

    function clickLike(){
        // like +=1;
        setLike(like+1);
        console.log(like);
    }

    const [text, setText] = useState('Like');

    function toggle(){
        if(text === ""){
            setText("Like");
        } else {
            setText("");
        }
    }

    return(
        <div style={{border:"1px solid", width:"500px"}}>
            <h1>{name} 자기소개서</h1>
            <h2>{hello}</h2>
            <h3>취미 : {hobby}</h3>
            <h3>좋아하는 음식 : {food}</h3>
            <h3>좋아하는 색 : <span style={{color:color}}>{color}</span></h3>
            <button onClick={clickLike}>like <span>{like}</span></button>
            <button onClick={toggle}>like</button> <span>{text}</span>
        </div>
    );
}

export default Resume;