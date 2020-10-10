import React from 'react';

import SingleplayerScore from './SingleplayerScore';

const Score = ({score, failedClicks}) => {
  return <SingleplayerScore score={score} failedClicks={failedClicks}/>
}

export default Score;
