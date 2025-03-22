import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const Count_increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>HI THERE YESUVA LOVES YOU</h1>
      <p>This is to inform you that you are loved</p>
      <Card text="click me" Count_increment={Count_increment}>
        <h1>This is from card</h1>
        <h2>{count}</h2>
      </Card>
    </div>
  );
}

export default App;
