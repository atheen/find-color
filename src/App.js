import React,{useState} from 'react';
import './App.css';

//Components
import Home from './Components/Home.js';
import Game from './Components/Game.js';

function App() {
  const [difficulty, setDifficulty] = useState(null);

  const page = () => {
    if (difficulty) return <Game difficulty={difficulty} setDifficulty={setDifficulty} />;
    return <Home setDifficulty={setDifficulty} />;
  };

  return (
    <div className = 'App my-5'>
    <div className = 'jumbotron'>
      {page()}

      <div className = 'row'>

        </div>

      </div>
    </div>
  );
}

export default App;
