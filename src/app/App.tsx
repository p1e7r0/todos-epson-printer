import React, { useRef, useState } from "react";
import "./App.css";
import { Printer } from "../common/epos-device";
import PrinterConnection from "../features/printer/PrinterConnection";
import PrintForm from "../features/printer/PrintForm";

const App: React.FC = () => {
  const printer = useRef<Printer | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = (p: Printer) => {
    printer.current = p;
    setIsConnected(true);
  };

  return (
    <div className="App">
      <PrinterConnection onConnect={handleConnect} isConnected={isConnected} />
      <PrintForm printer={printer.current} />
    </div>
  );
};

export default App;
