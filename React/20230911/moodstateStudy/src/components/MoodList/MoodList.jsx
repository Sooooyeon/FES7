import React from 'react';
import "./MoodList.css";
import MoodListItem from '../MoodListItem/MoodListItem';

export default function MoodList(props) {

    const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

    return (
        <ul className='container-list'>
            {menus.map((moodEl, index)=>{
                return(
                    <MoodListItem key={index} mood={moodEl} setCurrentMood={props.setCurrentMood} />
                )
            })}
        </ul>
    )
}
