import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map((item, index) => (
        <Comment username={item.username} key={index} text={item.text} />
      ))}

    </div>
  )
}

export default CommentSection;