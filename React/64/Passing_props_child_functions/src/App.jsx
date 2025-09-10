import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const Count_increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>HI THERE YESUVA LOVES YOU</h1>
        <p>This is to inform you that you are loved</p>
      </header>
      <main className="main">
        <Card text="click me" Count_increment={Count_increment}>
          <h1>This is from card</h1>
          <p>we are going to make things work</p>
          <h2>{count}</h2>
        </Card>
      </main>
    </div>
  );
}

export default App;
