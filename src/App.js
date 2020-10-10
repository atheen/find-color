import React,{useState} from 'react';
import './App.css';

//Components
import Home from './Components/Home.js';
import Game from './Components/Game.js';

function App() {
  const [difficulty, setDifficulty] = useState(null);

  const page = () => {
    if (difficulty) return <Game difficulty={difficulty} />;
    return <Home setDifficulty={setDifficulty} />;
  };

  return (
    <div className = 'App border my-5'>
      {page()}
      <div className = 'row'>
        <div className = 'col-3'>
          <button
            className='btn btn-danger mb-3'
            onClick={() => {
              setDifficulty(null);
            }}>
            Reset
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
