// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Pastes from "./components/pastes/Pastes";
import Home from "./components/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pastes",
    element: <Pastes />,
  },
  {
    path: "/pastes/:id",
    element: <App />,
  },
]);

function App() {
  return (
    <div className="w-full h-full">
      <h1 className="mx-auto  text-red-400 text-center">
        Hail to the king of kings
        <RouterProvider router={router} />
      </h1>
    </div>
  );
}

export default App;
