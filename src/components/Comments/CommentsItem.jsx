import React from 'react';

function CommentsItem(props) {
  const { comment } = props;

  return (
    <div className='comments__item'>
      <img className='comments__image' src={comment.image} alt={comment.author} />

      <blockquote className='comments__quote'>{comment.text}</blockquote>
      <p className='comments__quote-author'>{comment.author}</p>
    </div>
  )
}

export default CommentsItem;