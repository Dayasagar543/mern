// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Pastes from "./components/pastes/Pastes";
import Navbar from "./components/navbar/Navbar";
import Viewpaste from "./components/viewpastes/Viewpaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },

  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <Viewpaste />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <h1 className="text-2rem">Page not found</h1>
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="w-full h-full">
      {/* Hail to the king of kings */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
