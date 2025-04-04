import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/home/Home";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Courses from "./components/pages/routes/courses/Courses";
import About from "./components/pages/about/About";
import Contactus from "./components/pages/contactus/Contactus";
import Authentication from "./components/pages/authentication/Authentication";
import Page_not_found from "./components/pages/page_not_found/Page_not_found";
import Params from "./components/snippets/params/Params";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <Params />,
      },
      {
        path: "reports",
        element: <div>Hello World from reports</div>,
      },
      {
        path: "mocktests",
        element: <div>Hello World from mocktests</div>,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
  {
    path: "*",
    element: <Page_not_found />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
