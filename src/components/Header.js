import React from 'react';
import './Header.sass';

import { Link } from 'react-router';

const Logo = () => (
  <Link to='/'>
    Logo
  </Link>
)

const AppBarHeader = () => {
  const handleSearch = (event) => {
    console.log(event.target.value); //TODO: do normal search
  }
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo'><Logo /></div>
        <input className='header-search' autoComplete='off' type="text" name="search" placeholder="Search..."/>
        <div className='github-link'>
          <a href='#' target='_blank'>GitHub</a>
        </div>
        <div className='favorites'>
          <Link to='/favorites'>Favorites</Link>
        </div>
      </div>
    </div>
  );
}

export default AppBarHeader;
