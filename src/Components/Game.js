import React, {useState,useEffect} from 'react';

//Data
import {lightBlues,darkBlues} from '../data.js';

//Utils
import {shuffle} from '../utils.js';

//Components
import Color from './Color.js';
import Score from './Score.js';

import Confetti from 'react-confetti';

const Game = ({difficulty}) => {
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    switch (difficulty) {
      case 'easy':
        setColors(() => shuffle([...darkBlues, ...darkBlues, darkBlues[0], ...lightBlues]));
        break;
      case 'medium':
        setColors(() => shuffle([...darkBlues, ...darkBlues, ...darkBlues, ...darkBlues, darkBlues[0], darkBlues[0], darkBlues[0], ...lightBlues]));
        break;
      case 'hard':
        setColors(() => shuffle([...darkBlues, ...darkBlues, ...darkBlues, ...darkBlues, darkBlues[0], darkBlues[0], darkBlues[0], ...lightBlues]));
        break;
      default:
        break;
    }
  }, [difficulty,score]);



  const [failedClicks, increaseFailed] = useState(0);

  let clickedCards = [lightBlues[0]];
  const changeClicked = anArray => {
    clickedCards = anArray;
  };

  const checkClicked = clickedObject => {
    changeClicked([...clickedCards, clickedObject]);

    if (clickedCards.length === 2){
      if (clickedCards[0].id !== clickedCards[1].id) {
        increaseFailed(failedClicks+1);
      }else{
        setScore(score + 1);
      }
      changeClicked([]);
    }
  }

  const colorsList = colors.map((color,idx) => (
    <Color key={`${color.id}-${idx}`} color={color} checkClicked={checkClicked} odd={lightBlues[0].color} />
  ))

  return (
    <div className='container'>
    <div className='jumbotron'>
      <div className='row'>
        <Score
          score={score}
          failedClicks={failedClicks}
        />
        <div className='row'>{colorsList}</div>
        {score === 10 ? <Confetti width='5000px' height='5000px'/>:<p></p>}
        {score === 11 ? setScore(0):<p></p>}
      </div>
    </div>
    </div>
  )
}

export default Game;
