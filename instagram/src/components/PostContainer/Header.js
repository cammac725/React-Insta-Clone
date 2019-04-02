import React from 'react';
import './Header.css';

// =======================
//    Component
// =======================

const Header = props => {
  return (
    <div className='header'>
      <img src={props.thumbnail} alt='thumbnail' />
      <p>{props.username}</p>
    </div>
  )
}

export default Header;