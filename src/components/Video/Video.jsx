import React from 'react';
import './video.scss';

import playButton from '../../images/video/icon_play.svg';
import kamchatka from '../../images/video/kamchatka.jpg';
import observatory from '../../images/video/observatory.jpg';

function Video() {
  return (
    <section className='video'>
      <h2 className='content-title'>В глубины Земли и в дальний космос</h2>
      <p className='content-subtitle'>Видео от студии Stereotactic о местах в России, где ведутся фундаментальные исследования</p>
      <div className='video__container'>

        <a className='video__item' href='https://vimeo.com/81106671' target='_blank' rel="noreferrer">
        <img className='video__icon_type_play' src={playButton} alt='Кнопка Играть' />
        <div className='video__column-content'>
          <p className='video__duration'>6:30</p>
          <h3 className='video__title'>Colors of Kamchatka</h3>
          <p className='video__subtitle'>Director: Pavel Karykhalin</p>
        </div>
        <img className='video__image' src={kamchatka} alt='Берег Камчатки' />
        </a>

        <a className='video__item' href='https://vimeo.com/290675450' target='_blank' rel="noreferrer">
        <img className='video__icon_type_play' src={playButton} alt='Кнопка Играть' /> 
        <div className='video__column-content'>
          <p className='video__duration'>24:45</p>
          <h3 className='video__title'>Обсерватория | Observatory</h3>
          <p className='video__subtitle'>Director: Alexander Khudokon </p>
        </div>
        <img className='video__image' src={observatory} alt='Обсерватория под ночным небом' />
        </a>

      </div>
    </section>
  )
}

export default Video;