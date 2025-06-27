import "./App.css";
import ThermalPrinter from "./ThermalPrinter";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ThermalPrinter />
      </header>
    </div>
  );
};

export default App;
