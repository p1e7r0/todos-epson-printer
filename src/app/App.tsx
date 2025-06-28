import React, { useRef, useState } from "react";
import "./App.css";
import { Printer } from "../common/epos-device";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Printer Connection</AccordionTrigger>
          <AccordionContent>
            <PrinterConnection onConnect={handleConnect} isConnected={isConnected} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Print Form</AccordionTrigger>
          <AccordionContent>
            <PrintForm printer={printer.current} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
