import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

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
      <div className="App">
        <div className='search-bar'>
          <SearchBar searchPosts={this.searchHandler} />
        </div>

        <div>
          <PostContainer
            posts={this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data} />
        </div>

      </div>
    );
  }
}

export default App;
