import { useCallback, useState } from "react";

import "./App.css";
import Child from "./Components/Child";

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(0);
  // useCallback is used to avoid unncessary rerendering of the child component
  const expensive_operation = (num) => {
    // console.log("expensive_operaton");
    for (let i = 0; i < 10000000; i++) {}
    return num * 2;
  };

  let expensive_opeation1 = useCallback(
    () => expensive_operation(input),
    [input]
  );

  // console.log(expensive_opeation1);
  const handle_click = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  let handleChange = (e) => {
    setinput(e.target.value);
  };
  return (
    <div>
      <h1>UseCallback</h1>

      <h2>{count}</h2>
      <button onClick={handle_click}>Increment</button>
      <Child button_name="button" fun={handle_click} />
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter your number "
      />
      <h2>{expensive_opeation1()}</h2>
    </div>
  );
}

export default App;
