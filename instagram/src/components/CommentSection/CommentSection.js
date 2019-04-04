import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { CommentWrapper } from '../Styles';

// ===========================
//        Component
// ===========================

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Comments: this.props.comments,
      comment: ''
    }
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      username: localStorage.getItem('user'),
      text: this.state.comment
    }
    this.setState({
      Comments: [...this.state.Comments, newComment],
      comment: ''
    })
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <CommentWrapper>
        {this.state.Comments.map((item, index) => (
          <Comment username={item.username} key={index} text={item.text} />
        ))}

        <form
          onSubmit={this.addNewComment}
          className='comment-form'
        >
          <input
            className='comment-input form-control'
            type='text'
            name='comment'
            value={this.state.comment}
            placeholder='Add a new comment'
            onChange={this.handleChanges}
          />
        </form>
      </CommentWrapper>
    )
  }
}

// ===========================
//     Prop Types
// ===========================

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