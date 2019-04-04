import React from 'react';

// ========================
//      Components
// ========================

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      }
    }

    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ isLoggedIn: false })
      } else {
        this.setState({ isLoggedIn: true })
      }
    }

    render() {
      if (this.state.isLoggedIn) {
        return (
          <PostsPage
            posts={this.props.posts}
            searchPosts={this.props.searchPosts}
          />
        )
      } else {
        return (
          <Login />
        )
      }
    }
  }

export default withAuthenticate;
