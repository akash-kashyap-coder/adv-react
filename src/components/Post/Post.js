import React, { useState } from 'react'
import './Post.css';

function Post({post,IMAGE_URL}) {
  return (
    <div className='post-card'>
      <img src={IMAGE_URL} className='post-card-image'/>
      <div className='post-card-container'>
      <h1 className='post-card-title'>{post.title.toString().slice(0,49)}</h1>
      <p className='post-card-body'>{post.body}</p>
      </div>
    </div>
  )
}

export default Post