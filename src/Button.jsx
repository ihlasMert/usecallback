import React from 'react'

const Button=({handleClick})=> {
    console.log("Button render");
  return (
    <button onClick={handleClick}>
        sayacı arttır
      </button>
  )
}

export default React.memo(Button)