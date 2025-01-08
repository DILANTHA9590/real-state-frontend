import { useState } from "react";

import Header from "./components/header";
import About from "./components/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
    </div>
  );
}

export default App;
