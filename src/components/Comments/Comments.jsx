import React from 'react';
import './comments.scss';

import { TranslationContext } from '../../context/translation';

import CommentsItem from './CommentsItem';

function Comments() {
  const translation = React.useContext(TranslationContext).comments;

  return (
    <section className='comments section'>
      <h2 className='section__title'>{translation.title}</h2>
      <p className='section__subtitle'>{translation.subtitle}</p>

      <div className='comments__container'>
        {
          translation.commentsItems.map((el, index) => {
            return <CommentsItem comment={el} key={index} />
          })
        }
      </div>
    </section>
  )
}

export default Comments;