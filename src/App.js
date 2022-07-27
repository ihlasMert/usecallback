import "./App.css";
import React, { useState, useMemo} from "react";
import Button from "./Button"


const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

 
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        sayacı arttır
      </button>
      <Button/>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default App;
