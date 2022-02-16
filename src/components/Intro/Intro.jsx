import React from 'react';
import './intro.scss';

import { TranslationContext } from '../../context/translation';

function Intro() {
  const translation = React.useContext(TranslationContext).intro;

  return (
    <section className='intro section'>
      <h2 className='intro__title'>{translation.title}</h2>

      <p className='intro__text'>{translation.text}</p>

      <p className='intro__statistics'>{translation.statistics}</p>
    </section>
  )
}

export default Intro;