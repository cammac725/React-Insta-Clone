import React from 'react';

const Comment = props => {
  return (
    <div>
      <p><strong>{props.username}</strong>  {props.text}</p>
    </div>
  )
}

export default Comment;