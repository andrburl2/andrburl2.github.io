import React from 'react';
import './comments.scss';
import { COMMENTS_DATA } from './comment-data';

import CommentsItem from './CommentsItem';

function Comments() {
  return (
    <section className='comments'>
      <h2 className='content-title'>Фотографы, снимающие Россию</h2>
      <p className='content-subtitle'>Природа и люди вдохновили их работы, удостоенные наград на международных конкурсах</p>

      <div className='comments__container'>
        {
          COMMENTS_DATA.map((el, index) => {
            return <CommentsItem comment={el} key={index} />
          })
        }
      </div>
    </section>
  )
}

export default Comments;