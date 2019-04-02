import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';
import Header from './Header';
import './PostContainer.css';
import PropTypes from 'prop-types';

// =========================
//    Component
// =========================

const PostContainer = props => {
  return (
    <div className='post-wrapper'>
      {props.posts.map(item => (
        <div className='post' key={item.timestamp}>
          <Header thumbnail={item.thumbnailUrl} username={item.username} />
          <img className='main-img' src={item.imageUrl} alt='full-size' />
          <div className='likes'>
            <Likes likes={item.likes} />
          </div>
          <div className='bottom'>
            <CommentSection comments={item.comments} />
          </div>
        </div>
      ))}
    </div>
  )
}

// ======================
//    Prop types
// ======================

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