import React from 'react';

const Home = ({setDifficulty}) => {
  return (
    <div className='container'>
      <div className='jumbotron m-5'>
        <h1 className='mb-5'>Find The Odd Color</h1>
        <div>
          <h1>Choose The Difficulty</h1>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-success mb-3'
            onClick={() => setDifficulty("easy")}>
            Easy
          </button>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-warning mb-3'
            onClick={() => setDifficulty("medium")}>
            Medium
          </button>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-danger mb-3'
            onClick={() => setDifficulty("hard")}>
            Hard
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
