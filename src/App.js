import { useState } from "react";
import "./App.css";

import { DarkmodeSwitch } from "reacthalfmoon";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Hero />
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
