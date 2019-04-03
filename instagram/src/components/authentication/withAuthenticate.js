import React from 'react';

const withAuthenticate = PostsPage =>
  class extends React.Component {
    render() {
      return (
        <PostsPage
          posts={this.props.posts}
          searchPosts={this.props.searchPosts}
        />
      )
    }
  }

export default withAuthenticate;
