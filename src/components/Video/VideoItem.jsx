import React from 'react';

function VideoItem(props) {
  const { video } = props;

  return (
    <a className='video__item' href={video.link} target='blank' rel='noreferrer' title={video.linkTitle}>
      <div className='video__column-content'>
        <p className='video__duration'>{video.duration}</p>
        <h3 className='video__title'>{video.title}</h3>
        <p className='video__subtitle'>{video.subtitle}</p>
      </div>

      <img className='video__image' src={video.img} alt={video.imgAlt} />
    </a>
  )
}

export default VideoItem;