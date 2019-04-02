import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  render() {
    return (
      <div className="App">
        <div className='search-bar'>
          <SearchBar />
        </div>

        <div>
          <PostContainer
            posts={this.state.data} />
        </div>

      </div>
    );
  }
}

export default App;
