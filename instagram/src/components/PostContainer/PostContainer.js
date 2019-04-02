import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
  console.log('posts', props)
  return (

    <div className='post-wrapper'>
      {props.posts.map(item => (
        <div className='post' key={item.timestamp}>
          <header>
            <img src={item.thumbnailUrl} alt='thumbnail' />
            <p>{item.username}</p>
          </header>

          <img className='main-img' src={item.imageUrl} alt='full-size' />

          <div className='likes'>
            <Likes likes={item.likes} />
          </div>

          <div className='bottom'>
            <CommentSection comments={item.comments} />
          </div>

        </div>
      ))}
    </div >
  )
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
    })
  )
}

export default PostContainer;