// import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Flavor_Haven from "./assets/card_images/Flavor_Haven.webp";
import Global_Bites_Bistro from "./assets/card_images/Global_Bites_Bistro.webp";
import The_Culinary_Canvas from "./assets/card_images/The_Culinary_Canvas.webp";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app_div">
      <Header />
      <div className="app_cards">
        <Cards name="Flavor Haven" img={Flavor_Haven} />
        <Cards name="Global Bites Bistro" img={Global_Bites_Bistro} />
        <Cards name="The Culinary Canvas" img={The_Culinary_Canvas} />
      </div>
    </div>
  );
}

export default App;
