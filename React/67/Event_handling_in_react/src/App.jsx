import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const run = () => {
  //   alert("I am clicked");
  // };

  const input = (e) => {
    console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    alert("form is about to be submitted");
  };

  return (
    <div className="container">
      <form onSubmit={submit}>
        <input type="text" onChange={input} />
        <button className="button " onClick={submit}>
          Click me
        </button>
      </form>
    </div>
  );
}

export default App;
