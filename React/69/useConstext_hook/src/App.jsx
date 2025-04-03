import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//1.create Context
const UserContext = createContext();

function App() {
  const [data, setData] = useState({ name: "rahul", gender: "male" });

  return (
    <>
      {/* 2.wrap inside a context provider */}
      <UserContext.Provider value={data}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
//3. export the context tooo
export {UserContext};
