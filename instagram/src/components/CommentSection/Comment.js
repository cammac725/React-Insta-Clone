import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CommentDiv } from '../Styles';

// ======================
//      Components
// ======================

const Comment = props => {
  return (
    <CommentDiv>
      <p className='comment-text'><strong>{props.username}</strong>  {props.text}</p>
    </CommentDiv>
  )
}

// ======================
//    Prop Types
// ======================

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;