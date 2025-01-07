import { useState } from "react";
import Navigationbar from "./components/Navigationbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigationbar />
    </>
  );
}

export default App;
