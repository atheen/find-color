import React from 'react';

const Home = ({setDifficulty}) => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='mb-5 text-light'>Find The Odd Color</h1>
        <hr className='border border-light'/>
        <div>
          <h5 className='text-light'>Choose The Difficulty</h5>
        </div>


        <div className="btn-group-vertical btn-block mt-2" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success" onClick={() => setDifficulty("easy")}>Easy</button>
          <button type="button" className="btn btn-warning" onClick={() => setDifficulty("medium")}>Medium</button>
          <button type="button" className="btn btn-danger" onClick={() => setDifficulty("hard")}>Hard</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
