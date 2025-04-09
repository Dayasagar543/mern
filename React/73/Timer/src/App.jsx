import { useState } from "react";

import "./App.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  let current_time = useRef(null);

  const Start = () => {
    current_time.current = setInterval(() => {
      setCount(count=>count + 1);
    }, 1000);
  };
  const stop = () => {
    current_time.current = clearInterval(current_time.current);
  };
  const Reset = () => {
    stop()
    setCount(0);
  };
  return (
    <div className="app">
      <h1>The amount of time taken is {count}</h1>
      <button onClick={Start}>Start</button>
      <button onClick={stop}>stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
