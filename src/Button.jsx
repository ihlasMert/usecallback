import React from 'react'

function Button() {
    console.log("Button render");
  return (
    <div>Button</div>
  )
}

export default React.memo(Button)