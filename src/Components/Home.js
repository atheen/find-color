import React from 'react';

import Particles from "react-tsparticles";


const Home = ({setDifficulty}) => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='mb-5 text-light display-1'>Find The Odd Color</h1>
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
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
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
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        <div>
          <h5 className='text-light display-4'>Choose The Difficulty</h5>
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
