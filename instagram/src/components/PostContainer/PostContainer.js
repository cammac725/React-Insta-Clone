import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
  console.log('posts', props)
  return (

    <div className='post-wrapper'>
      {props.posts.map(item => (
        <div key={item.timestamp}>
          <header>
            <img src={item.thumbnailUrl} alt='thumbnail' />
            <p>{item.username}</p>
          </header>

          <img className='main-img' src={item.imageUrl} alt='full-size' />

          <div className='likes'>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
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