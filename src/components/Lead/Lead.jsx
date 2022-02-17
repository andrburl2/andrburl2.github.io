import React from 'react';
import './lead.scss';

import topShelf from '../../images/top_shelf.jpg';

import { TranslationContext } from '../../context/translation';

function Lead() {
  const translation = React.useContext(TranslationContext).lead;

  return (
    <section className='lead section'>
      <h1 className='lead__title'>{translation.title}</h1>
      <p className='lead__subtitle'>{translation.subtitle}</p>

      <figure className='lead__figure'>
        <img className='lead__figure-image' src={topShelf} alt={translation.imgAlt} />
        <figcaption className='lead__figure-caption'>{translation.figcaption}</figcaption>
      </figure>
    </section>
  )
}

export default Lead;