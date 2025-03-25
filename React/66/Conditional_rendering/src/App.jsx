import { useState } from "react";
import Logout from "./components/logout/logout";
import "./App.css";
import Login from "./components/login/Login";

function App() {
  const [isloggedin, set_status_loggedin] = useState(true);

  // condtional rendering using ternary operator
  return (
    <>
      <div className="container">
        <h1>Hello world</h1>
        {isloggedin ? (
          <Logout status={isloggedin} set_state={set_status_loggedin} />
        ) : (
          <Login status={isloggedin} set_state={set_status_loggedin} />
        )}
      </div>
    </>
  );



  // conditional rendering using if and else
  // if (isloggedin) {
  //   return (
  //     <div className="container">
  //       <Logout status={isloggedin} set_state={set_status_loggedin} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="container">
  //       <Login status={isloggedin} set_state={set_status_loggedin} />
  //     </div>
  //   );
  // }
}

export default App;
