import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // let value = 1;
  let value = useRef(0);
  let background_ref = useRef();
  const handle_click = (e) => {
    value.current = value.current + 1;
    setCount(count + 1);
    console.log(value.current);
  };

  const change_background = () => {
    background_ref.current.style.backgroundColor = "cyan";
  };

  useEffect(() => {
    console.log("rendering");
  });

  return (
    <div ref={background_ref} className="view_pane">
      <h1>{count}</h1>
      <br />
      <button onClick={handle_click}>increase</button>
      <button onClick={change_background}>change background </button>
    </div>
  );
}

export default App;
