import React from 'react';
import './cover.scss';

import coverBg from '../../images/cover-bg.jpg';

function Cover() {
  return (
    <section className='cover'>
      <a className='cover__link' href='https://stampsy.com/na-elektrichkakh-do-baikala' target='_blank' rel='noreferrer'>
        <h2 className='cover__title'>До Байкала «на собаках»</h2>
        <p className='cover__subtitle'>По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до Байкала на электричках.</p>

        <img className='cover__bg' src={coverBg} alt='Стоянка поездов' />
      </a>
    </section>
  )
}

export default Cover;