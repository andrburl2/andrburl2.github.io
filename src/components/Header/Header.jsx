import React from 'react';
import './header.scss';

import logo from '../../images/logo.svg';

function Header(props) {
  const { switchLang, selectedLang } = props;

  return (
    <header className='header section'>
      <img className='header__logo' src={logo} alt='Логотип карта Россия' />

      <div className='header__langs'>
        <button className={`header__button ${selectedLang === 'ru' ? 'header__button_selected' : ''}`} onClick={() => switchLang('ru')}>Ru</button>
        <button className={`header__button ${selectedLang === 'en' ? 'header__button_selected' : ''}`} onClick={() => switchLang('en')}>En</button>
      </div>
    </header>
  )
}

export default Header;