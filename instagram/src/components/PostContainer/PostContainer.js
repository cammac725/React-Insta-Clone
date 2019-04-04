import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';
import Header from './Header';
import PropTypes from 'prop-types';
import { PostWrapperDiv } from '../Styles';
import { PostDiv } from '../Styles';
import { LikesDiv } from '../Styles';

// =========================
//       Components
// =========================

const PostContainer = props => {
  return (
    <PostWrapperDiv>
      {props.posts.map(item => (
        <PostDiv key={item.timestamp}>
          <Header thumbnail={item.thumbnailUrl} username={item.username} />
          <img className='main-img' src={item.imageUrl} alt='full-size' />
          <LikesDiv>
            <Likes likes={item.likes} />
          </LikesDiv>
          <div>
            <CommentSection comments={item.comments} />
          </div>
        </PostDiv>
      ))}
    </PostWrapperDiv>
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