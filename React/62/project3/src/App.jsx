import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="box_container">
      <h1 id="header">you clicked {count} times</h1>
      <button id="increment_button" onClick={e=>{setCount(count+1)}}>click me</button>
      {/* <button onClick={e=>{setCount(count-1)}}>click me</button> */}
    </div>
  );
}

export default App;
