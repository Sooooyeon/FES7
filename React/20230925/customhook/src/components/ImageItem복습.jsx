import React from 'react'

export default function ImageItem복습({image}) {
  return (
    <img src={image.download_url} alt="" style={{width:400}} />
  )
}
