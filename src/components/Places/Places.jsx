import React from 'react';
import './places.scss';

import { TranslationContext } from '../../context/translation';

import PlaceItem from './PlaceItem';

function Places() {
  const translation = React.useContext(TranslationContext).places;

  return (
    <section className='places section'>
      {
        translation.map((el, index) => {
          return <PlaceItem card={el} key={index} />
        })
      }
    </section>
  )
}

export default Places;