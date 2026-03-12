import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/pastes",
    element: <Root />,
  },
  {
    path: "/pastes/:id`",
    element: <Root />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-lvh w-1vw flex flex-col justify-center items-center">
         Chinuch Tech
      </div>
    </>
  );
}

export default App;
