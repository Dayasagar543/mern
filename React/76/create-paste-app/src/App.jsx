import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Paste_view from "./pages/Paste_view";
import Paste_detail from "./pages/Paste_detail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";

// routes
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
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste_view />
      </div>
    ),
    children: [
      {
        path: "/pastes/:id",
        element: (
          <div>
            <Navbar />
            <Paste_detail />
          </div>
        ),
      },
    ],
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
    path: "/contactUs",
    element: (
      <div>
        <Navbar />
        <ContactUs />
      </div>
    ),
  },
  {
    path: "/service",
    element: (
      <div>
        <Navbar />
        <Service />
      </div>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-evenly">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
