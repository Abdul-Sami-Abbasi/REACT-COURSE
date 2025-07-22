import React from "react";
import useWindowWidth from "./useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div>
      <h2>Custom Hook - Window Width</h2>
      <p>Current window width: {width}px</p>
    </div>
  );
}

export default App;
