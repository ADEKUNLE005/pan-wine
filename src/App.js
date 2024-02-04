import React, { createContext, useState } from "react";

import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
export const countContext = createContext(null);
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <countContext.Provider value={{ count, setCount }}>
        <Outlet />
        <ScrollRestoration />
      </countContext.Provider>
    </div>
  );
}

export default App;
