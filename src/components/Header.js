import React from 'react';
import Search from './Search';
import '../styles/Header.sass';

import { Link } from 'react-router';

const Logo = () => (
  <Link className='header-link' to='/'>
    Logo
  </Link>
)

const AppBarHeader = ({...rest}) => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo'><Logo /></div>
        <Search {...rest} />
        <div className='github-link'>
          <a className='header-link' href='https://github.com/cyxn/film-website' target='_blank'>GitHub</a>
        </div>
        <div className='favorites'>
          <Link className='header-link' to='/favorites'>Favorites</Link>
        </div>
      </div>
    </div>
  );
}

export default AppBarHeader;
