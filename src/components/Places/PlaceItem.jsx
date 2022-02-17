import React from 'react';

function PlaceItem(props) {
  const { card } = props; 

  return (
    <div className='place__item'>
      <h3 className='place__title'>{card.title}</h3>

      <div className='place__website'>
        <p className='place__website-heading'>URL</p>
        <a className='place__website-url' href={card.link} target='_blank' rel='noreferrer'>{card.linkText}</a>
      </div>

      <img className='place__image' src={card.image} alt={card.alt} />

      <div className='place__text-column'>
        {
          card.text.map((el, index) => {
            return <p className='place__text' key={index}>{el}</p>
          })
        }
      </div>
  </div>
  )
}

export default PlaceItem;