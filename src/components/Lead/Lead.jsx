import React from 'react';
import './lead.scss';

import topShelf from '../../images/top_shelf.jpg';

function Lead() {
  return (
    <section className='lead section'>
      <h1 className='lead__title'>Путешествия по России</h1>
      <p className='lead__subtitle'>Настоящая страна не в выпусках новостей, а здесь</p>

      <figure className='lead__figure'>
        <img className='lead__figure-image' src={topShelf} alt='Спящий перед окном в поезде человек' />
        <figcaption className='lead__figure-caption'>ваша полка — верхняя</figcaption>
      </figure>
    </section>
  )
}

export default Lead;