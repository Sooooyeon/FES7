import React from 'react';
import "./MoodListItem.css";

export default function MoodListItem(props) {

    const onItemClick=()=>{
        props.setCurrentMood(props.mood)
    }    
    return (
        <li>
            <button onClick={onItemClick}className='btn-item'>기분이 : {props.mood}</button>
        </li>
    )
}
