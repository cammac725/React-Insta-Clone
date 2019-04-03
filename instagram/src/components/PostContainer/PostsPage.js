import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = props => {
  return (
    <div>
      <SearchBar searchPosts={props.searchPosts} />
      <PostContainer posts={props.posts} />
    </div>
  )
}

export default PostsPage;