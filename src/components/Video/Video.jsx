import React from 'react';
import './video.scss';

import { TranslationContext } from '../../context/translation';

import VideoItem from './VideoItem';

function Video() {
  const translation = React.useContext(TranslationContext).video;

  return (
    <section className='video section'>
      <h2 className='section__title'>{translation.title}</h2>
      <p className='section__subtitle'>{translation.subtitle}</p>
      <div className='video__container'>

        {
          translation.videos.map((el, index) => {
            return <VideoItem video={el} key={index} />
          })
        }

      </div>
    </section>
  )
}

export default Video;