import React from 'react';
import './main.scss';

import Lead from '../Lead/Lead';
import Intro from '../Intro/Intro';
import PhotoGrid from '../Photo-grid/Photo-grid';
import Places from '../Places/Places';
import Video from '../Video/Video';
import Comments from '../Comments/Comments';
import Cover from '../Cover/Cover';

function Main() {
  return (
    <main className='main'>
      <Lead />
      <Intro />
      <PhotoGrid />
      <Places />
      <Video />
      <Comments />
      <Cover />
    </main>
  )
}

export default Main;