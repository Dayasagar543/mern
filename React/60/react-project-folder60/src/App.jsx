import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>{count}</div>
        <button
          onClick={(e) => {
            setCount(count+1);
          }}
        >
          add
        </button>
        <button
          onClick={(e) => {
            setCount(count-1);
          }}
        >
          subtract
        </button>
      </div>
    </>
  );
}

export default App;
