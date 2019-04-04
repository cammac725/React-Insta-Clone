import React from 'react';

// =======================
//      Components
// =======================


class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    }
  }

  addLikes = e => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <i className="far fa-heart" onClick={this.addLikes}></i>
        <i className="far fa-comment"></i>
        <p>{this.state.likes} likes</p>
      </div>
    )
  }
}

export default Likes;