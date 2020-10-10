import React from 'react';

const Score = ({score, failedClicks}) => {
  return (
    <div className='mt-3'>
      <div>
        <h2 className='text-success'>{score}</h2>
        <h3 className='text-danger'>{failedClicks}</h3>
      </div>
    </div>
  )
}

export default Score;
