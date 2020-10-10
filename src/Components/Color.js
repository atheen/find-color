import React, {useState} from 'react';


const Color = ({color, checkClicked, odd}) => {
  const [clicked, changeClicked] = useState(false);

  const handleClick = () => {
    console.log(odd)
    if (clicked !== true) {
      changeClicked(true);
      checkClicked({id:color.id, changeClicked:changeClicked});
    }
  }

  return (
    <div className='col-1 my-1'>
      <img
        className='mx-auto'
        src={color.color}
        height='100%'
        width='100%'
        onClick = {() => handleClick()}
      />

    </div>
  )
}

export default Color
