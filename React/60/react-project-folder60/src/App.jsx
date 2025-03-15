import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>hi there manually created heading</h1>
        <div>{count}</div>
        <div>
          <button
            onClick={(e) => {
              setCount(count + 1);
            }}
          >
            add
          </button>
          <button
            onClick={(e) => {
              setCount(count - 1);
            }}
          >
            subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
