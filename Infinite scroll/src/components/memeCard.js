import React from 'react';
import './memeCard.css';

function MemeCard({ item }) {
  return (
    <>
      <div className='wrapper'>
        <img src={item?.url} alt='meme-img' />
        <div className='meme-title'>{item?.title || ''}</div>
      </div>
    </>
  );
}

export default MemeCard;
