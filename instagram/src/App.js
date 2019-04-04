import React, { Component } from 'react';

import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';
import { AppDiv } from './components/Styles';

// =========================
//    Component
// =========================

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  searchHandler = e => {
    const data = this.state.data.filter(post =>
      post.username.includes(e.target.value)
    )
    this.setState({ filteredPosts: data })
  }

  render() {
    return (
      <AppDiv>
        <Authentication
          searchPosts={this.searchHandler}
          posts={this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.data
          }
        />
      </AppDiv>
    );
  }
}

const Authentication = withAuthenticate(PostsPage)(Login);


export default App;
