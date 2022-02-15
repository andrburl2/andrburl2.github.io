import React from 'react';
import './photo-grid.scss';
import { PHOTO_GRID_DATA } from './photo-grid-data';

function PhotoGrid() {
  return (
    <section className='photo-grid section'>
      {
        PHOTO_GRID_DATA.map((el, index) => {
          return <img className='photo-grid__item' src={el.image} alt={el.alt} key={index} />
        })
      }
    </section>
  )
}

export default PhotoGrid;