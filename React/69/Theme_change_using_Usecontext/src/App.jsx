import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//created the context
const Theme = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  const style = {
    backgroundColor: theme === "light" ? "beige" : "black",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="app w-full h-full flex justify-center">
      {/* created the context provider */}
      <Theme.Provider value={{ theme, setTheme }}>
        <div className="flex justify-center">
          <ChildA style={style} />
        </div>
      </Theme.Provider>
    </div>
  );
}

export default App;
// exporting the context
export { Theme };
