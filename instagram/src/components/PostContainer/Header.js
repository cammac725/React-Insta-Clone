import React from 'react';
import { HeaderDiv } from '../Styles';

// =======================
//      Components
// =======================

const Header = props => {
  return (
    <HeaderDiv>
      <img className='thumb-img' src={props.thumbnail} alt='thumbnail' />
      <p className='header-text'>{props.username}</p>
    </HeaderDiv>
  )
}

export default Header;