import { useState } from "react";

import Header from "./components/header";
import About from "./components/about";
import Project from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
