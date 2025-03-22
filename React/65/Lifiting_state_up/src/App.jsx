import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [name, Setname] = useState("");

  return (
    <div className="container">
      <div className="app_heading_container">
        <h1 className="app_heading">Hail yeshuva</h1>
      </div>

      <div className="card_container">
        <Card title="card1" name={name} Setname={Setname} />
        <Card title="card2" name={name} Setname={Setname} />
      </div>
    </div>
  );
}

export default App;
