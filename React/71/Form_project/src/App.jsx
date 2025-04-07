import { useState } from "react";

import Form from "./Components/Form/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Form />
    </div>
  );
}

export default App;
