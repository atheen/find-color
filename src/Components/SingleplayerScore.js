import React from 'react';

const SingleplayerScore = ({score,failedClicks}) => {
  return(
    <div className='mt-3'>
      <div>
        <h6 className='text-light'>Failed Attemts: {failedClicks} - Score: {score} </h6>
      </div>
    </div>
  )
}

export default SingleplayerScore;
