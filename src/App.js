import { useState } from "react";
import "./App.css";

import { DarkmodeSwitch } from "reacthalfmoon";
import Header from "./Components/Header/Header";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className="app">
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
    </div>
  );
}

export default App;

/* Components: 
  Header
  Hero
  Tech Stack
  Projects
  Experience
  Education
  Contact
*/
