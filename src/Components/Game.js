import React, {useState,useEffect} from 'react';

//Data
import {lightBlues,darkBlues,lightReds,darkReds,lightYellows,darkYellows,lightGreens,darkGreens} from '../data.js';

//Utils
import {shuffle} from '../utils.js';

import Particles from "react-tsparticles";


//Components
import Color from './Color.js';
import Score from './Score.js';

import Confetti from 'react-confetti';

const Game = ({difficulty, setDifficulty}) => {
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(0);
  const [backColor, setBackColor] = useState('#222222')
  const [darkLight,setDarkLight] = useState([darkBlues,lightBlues]);
  const [failedClicks, increaseFailed] = useState(0);

  let dark = darkLight[0]
  let light = darkLight[1]

  useEffect(() => {
    switch (difficulty) {
      case 'easy':
        setColors(() => shuffle([...dark, ...dark, dark[0], ...light]));
        setBackColor('#77DD77')
        break;
      case 'medium':
        setColors(() => shuffle([...dark, ...dark, ...dark, ...dark, dark[0], dark[0], dark[0], ...light]));
        setBackColor('#FFE338')
        break;
      case 'hard':
        setColors(() => shuffle([...dark, ...dark, ...dark, ...dark, dark[0], dark[0], dark[0], ...light]));
        setBackColor('#FF0000')
        break;
      default:
        break;
    }
  }, [difficulty,score]);


  let clickedCards = [lightBlues[0]];
  const changeClicked = anArray => {
    clickedCards = anArray;
  };

  const checkClicked = clickedObject => {
    changeClicked([...clickedCards, clickedObject]);

    if (clickedCards.length === 2){
      if (clickedCards[0].id !== clickedCards[1].id) {
        increaseFailed(failedClicks+1);
        if (failedClicks === 4){
          setTimeout(() => {
            setDifficulty(null);
          }, 2000);
        }
      }else{
        setScore(score + 1);
        if (darkLight[0]===darkBlues){
          setDarkLight([darkReds,lightReds])
        }
        else if (darkLight[0]===darkReds){
          setDarkLight([darkYellows,lightYellows])
        }
        else if (darkLight[0]===darkYellows){
          setDarkLight([darkGreens,lightGreens])
        }
        else if (darkLight[0]===darkGreens){
          setTimeout(() => {
            setDifficulty(null);
          }, 7000);
        }
      }
      changeClicked([]);
    }
  }


  const colorsList = colors.map((color,idx) => (
    <Color key={`${color.id}-${idx}`} color={color} checkClicked={checkClicked} odd={darkLight[0].color} />
  ))

  return (
    <div className='container'>
    <div className='jumbotron text-center'>
      <div className='text-center'>
      {failedClicks === 5 ? <h1 className='text-danger display-4'>YOU LOST</h1>:<p></p>}
      {score === 4 ? <Confetti width='5000px' height='5000px'/>:<p></p>}
      {score === 4 ? <h1 className='text-success display-4'>YOU WON!!</h1>:<p></p>}
      <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#222222",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: backColor,
              },
              links: {
                color: backColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        />
        <Score
          score={score}
          failedClicks={failedClicks}
        />
        <div className='row'>{colorsList}</div>
        <button type="button" className="btn btn-secondary btn-block" onClick={() => setDifficulty(null)}>Reset</button>
      </div>
      <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#222222",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: backColor,
              },
              links: {
                color: backColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        />
    </div>
    </div>
  )
}

export default Game;
