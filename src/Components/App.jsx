import React from "react";
import Home from "./Home";
import SnowEffect from "./SnowEffect";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <div>
      <div className="snow-effect-container">
        <SnowEffect />
      </div>
      <div className="content-container">
        <Home />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
