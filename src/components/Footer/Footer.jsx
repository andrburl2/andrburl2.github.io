import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <ul className='footer__links'>
      <li><a className='footer__link' href='https://yandex.ru/maps' target='_blank' rel='noreferrer'>Карты</a></li>
      <li><a className='footer__link' href='https://yandex.ru/pogoda' target='_blank' rel='noreferrer'>Погода</a></li>
      <li><a className='footer__link' href='https://rasp.yandex.ru' target='_blank' rel='noreferrer'>Расписание</a></li>
      <li><a className='footer__link' href='https://calendar.yandex.ru' target='_blank' rel='noreferrer'>Календарь</a></li>
      <li><a className='footer__link' href='https://travel.yandex.ru' target='_blank' rel='noreferrer'>Путешествия</a></li>
      </ul>
      
      <p className='footer__copyright'>&copy; 2019. Бурлаков Андрей</p>
    </footer>
  )
}

export default Footer;