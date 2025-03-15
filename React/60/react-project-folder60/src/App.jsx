import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>hi there manually created heading</h1>
        <div>{count}</div>
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
    </>
  );
}

export default App;
