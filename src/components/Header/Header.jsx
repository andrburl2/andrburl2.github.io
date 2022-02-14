import React from 'react';
import './header.scss';

import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип карта Россия' />

      <div className='header__langs'>
        <button className='header__button'>Ru</button>
        <button className='header__button'>En</button>
      </div>
    </header>
  )
}

export default Header;