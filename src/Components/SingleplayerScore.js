import React from 'react';

const SingleplayerScore = ({score,failedClicks}) => {
  return(
    <div className='col-3 mt-3'>
      <div>
        <h6>Failed Attemts: {failedClicks} </h6>
        <h6>Score: {score} </h6>
      </div>
    </div>
  )
}

export default SingleplayerScore;
