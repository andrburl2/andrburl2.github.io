import React from 'react';
import './cover.scss';

import { TranslationContext } from '../../context/translation';

function Cover() {
  const translation = React.useContext(TranslationContext).cover;

  return (
    <section className='cover'>
      <a className='cover__link' href='https://stampsy.com/na-elektrichkakh-do-baikala' target='_blank' rel='noreferrer' title={translation.linkTitle}>
        <h2 className='cover__title'>{translation.title}</h2>
        <p className='cover__subtitle'>{translation.subtitle}</p>
      </a>
    </section>
  )
}

export default Cover;