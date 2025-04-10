import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setvalue] = useState(0);

  const expensive = (num) => {
    console.log("expensive task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };
  // let double_value = expensive(value);
  let double_value = useMemo(() => expensive(value), [value]);

  // console.log(double_value);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div className="view_frame">
      <h1>Memoisation</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <label>Input for expensive computation</label>
      <br />
      <input
        type="text"
        placeholder="enter a number"
        onChange={handleChange}
        value={value}
      />
      <h3>The double value: {double_value}</h3>
    </div>
  );
}

export default App;
