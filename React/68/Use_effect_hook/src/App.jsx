import { useState, useEffect } from "react";
import "./App.css";
import Card_render from "./Components/Card_render";

function App() {
  const [addcount, setaddcount] = useState(0);
  const [subcount, setsubcount] = useState(0);
  // first--->side effect function
  // second----->clean-up function
  // comma seperated dependency list

  // variation1 -------> runs on every render
  // useEffect(() => {
  //   first;
  //   return () => {
  //     second;
  //   };
  // }, [Third]);

  //runs on each render
  // useEffect(() => {
  //   alert("hi there you are using the react features");
  // });

  // runs for the first render
  // useEffect(() => {
  //   alert("running the code");
  // }, []);

  // runs on the dependency list
  // useEffect(() => {
  //   alert("running the code only when count is updated ");
  // }, [count]);

  //runs on multiple dependencies
  // useEffect(() => {
  //   alert("triggering on multiple dependency values");
  // }, [addcount, subcount]);

  //runs along with the cleanup code
  // useEffect(() => {
  //   alert("count is mounted and updated on the UI");
  //   return () => {
  //     alert("count is unmounted");
  //   };
  // }, [addcount, subcount]);

  // const handle_addclick = (e) => {
  //   setaddcount(addcount + 1);
  // };
  // const handle_subclick = (e) => {
  //   setsubcount(subcount - 1);
  // };

  return (
    <div className="container">
      {/* <h1>{addcount}</h1>
      <button className="button" onClick={handle_addclick}>
        click me add
      </button>
      <h1>{subcount}</h1>
      <button className="button" onClick={handle_subclick}>
        click me sub
      </button> */}
      <Card_render/>
    </div>
  );
}

export default App;
