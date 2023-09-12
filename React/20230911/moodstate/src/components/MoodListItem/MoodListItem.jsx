import React from 'react';
import "./MoodListItem.css";

export default function MoodListItem(props) {

    const onitemClick = () => {
        props.setCurrentMood(props.mood)
    }

    console.log(props);
    return (
        <li>
            <button onClick={onitemClick} className='btn-item'>기분이 : {props.mood}</button>
        </li>
    )
}