import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  console.log('posts', props)
  return (

    <div>
      {props.posts.map(item => (
        <div key={item.timestamp}>
          <header>
            <img src={item.thumbnail} alt='thumbnail' />
          </header>

          <img src={item.imageUrl} alt='full-size' />

          <div className='likes'>
            <p>{item.likes} likes</p>
          </div>

          <div>
            <CommentSection comments={item.comments} />
          </div>

        </div>
      ))}
    </div >
  )
}

export default PostContainer;