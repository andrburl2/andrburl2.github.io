import React from 'react';
import './photo-grid.scss';
import { PHOTO_GRID_DATA } from './photo-grid-data';

import { TranslationContext } from '../../context/translation';

function PhotoGrid() {
  const translation = React.useContext(TranslationContext).photoGrid;

  return (
    <section className='photo-grid section'>
      {
        PHOTO_GRID_DATA.map((el, index) => {
          return <img className='photo-grid__item' src={el} alt={translation[index]} key={index} />
        })
      }
    </section>
  )
}

export default PhotoGrid;