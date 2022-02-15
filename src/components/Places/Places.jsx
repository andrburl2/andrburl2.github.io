import React from 'react';
import './places.scss';
import { PLACES_DATA } from './places-data';

import PlaceItem from './PlaceItem';

function Places() {
  return (
    <section className='places section'>
      {
        PLACES_DATA.map((el, index) => {
          return <PlaceItem card={el} key={index} />
        })
      }
    </section>
  )
}

export default Places;