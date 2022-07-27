import "./App.css";
import React, { useState, useCallback} from "react";
import Button from "./Button"


const App = () => {
  const [count, setCount] = useState(0);

const incrementCount =useCallback(()=>{
  setCount((prevCount)=>prevCount + 1)
}, [])

 
  return (
    <div className="App">
      <p>{count}</p>
     
      <Button handleClick={incrementCount}/>

    </div>
  );
};

export default App;
