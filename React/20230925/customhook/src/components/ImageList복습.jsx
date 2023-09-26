import React from 'react'
import ImageItem복습 from './ImageItem복습'

export default function ImageList복습({imageList}) {
    return (
        <ul>
            {imageList.map((item)=>{
                return(
                    <li key={item.id}>
                        <ImageItem복습 image={item} />
                    </li>
                )
            })}
        </ul>
    )
}
