import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map((item, index) => (
        <Comment username={item.username} key={index} text={item.text} />
      ))}

      <form>
        <input
          className='form-control'
          type='text'
          name='comment'
          value=''
          placeholder='Add a new comment'
        />
      </form>

    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default CommentSection;