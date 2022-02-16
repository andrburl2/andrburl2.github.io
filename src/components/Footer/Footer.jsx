import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className='footer section'>
      <ul className='footer__links'>
        <li className='footer__link-item'>
          <a className='footer__link' href='https://yandex.ru/maps' target='_blank' rel='noreferrer' title='Яндекс карты'>Карты</a>
        </li>

        <li className='footer__link-item'>
          <a className='footer__link' href='https://yandex.ru/pogoda' target='_blank' rel='noreferrer' title='Яндекс погода'>Погода</a>
        </li>

        <li className='footer__link-item'>
          <a className='footer__link' href='https://rasp.yandex.ru' target='_blank' rel='noreferrer' title='Яндекс Расписания'>Расписание</a>
        </li>

        <li className='footer__link-item'>
          <a className='footer__link' href='https://calendar.yandex.ru' target='_blank' rel='noreferrer' title='Яндекс Календарь'>Календарь</a>
        </li>

        <li className='footer__link-item'>
          <a className='footer__link' href='https://travel.yandex.ru' target='_blank' rel='noreferrer' title='Яндекс Путешествия'>Путешествия</a>
        </li>
      </ul>
      
      <p className='footer__copyright'>&copy; 2022. Бурлаков Андрей</p>
    </footer>
  )
}

export default Footer;