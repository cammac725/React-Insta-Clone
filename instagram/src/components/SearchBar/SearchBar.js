import React from 'react';
import { NavBar } from '../Styles';

// ========================
//       Components
// ========================

const SearchBar = props => {
  return (
    <NavBar className='navbar navbar-light bg-light'>
      <div className='nav-left'>
        <i className='fab fa-instagram'></i>
        <p>Insta-Cam</p>
      </div>

      <form className='form-inline'>
        <input
          className='form-control mr-sm-2'
          type='text'
          placeholder='Search'
          onKeyDown={props.searchPosts}
        />
      </form>

      <div className='nav-right'>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        <i
          className="fas fa-sign-out-alt"
          onClick={props.handleLogout}>
        </i>
      </div>

    </NavBar>
  )
}

export default SearchBar;