import React, { useRef, useState } from "react";
import { Printer, EPOSDeviceInstance, EPOSDeviceConstructor } from "./epos-device";

declare global {
  interface Window {
    epson: { ePOSDevice: EPOSDeviceConstructor };
  }
}

interface PrintOptions {
  title: string;
  text: string;
}

const ThermalPrinter: React.FC = () => {
  const [printerIPAddress, setPrinterIPAddress] = useState<string>("192.168.0.168");
  const [printerPort, setPrinterPort] = useState<string>("8008");
  const [printOptions, setPrintOptions] = useState<PrintOptions>({
    title: "",
    text: "",
  });
  const [connectionStatus, setConnectionStatus] = useState<string>("");

  // Utilizza i tipi definiti per i riferimenti, consentendo a TypeScript di fornire un migliore controllo dei tipi.
  const ePosDevice = useRef<EPOSDeviceInstance | null>(null);
  const printer = useRef<Printer | null>(null);

  const STATUS_CONNECTED = "Connected";

  const connect = () => {
    setConnectionStatus("Connecting ...");

    if (!printerIPAddress) {
      setConnectionStatus("Type the printer IP address");
      return;
    }
    if (!printerPort) {
      setConnectionStatus("Type the printer port");
      return;
    }

    setConnectionStatus("Connecting ...");

    const ePosDev: EPOSDeviceInstance = new window.epson.ePOSDevice();
    ePosDevice.current = ePosDev;

    ePosDev.connect(
      printerIPAddress,
      printerPort,
      (data) => {
        if (data !== "OK" && data !== "SSL_CONNECT_OK") {
          throw data;
        }

        ePosDev.createDevice("local_printer", ePosDev.DEVICE_TYPE_PRINTER, { crypto: false, buffer: false }, (data: Printer, code: string) => {
          if (code !== "OK" && code !== "SSL_CONNECT_OK") {
            throw code;
          }

          printer.current = data;
          setConnectionStatus(STATUS_CONNECTED);
        });
      },
      { eposprint: true }
    );
  };

  const print = ({ title, text }: { title: string; text: string }) => {
    let print = printer.current;
    if (!print) {
      alert("Not connected to printer");
      return;
    }

    print.addTextStyle(false, false, true);
    print.addTextSize(2, 2);
    print.addText(title + "\n");
    print.addTextStyle(false, false, false);
    print.addTextSize(1, 1);
    print.addText(text);
    print.addFeedLine(5);
    print.addCut(print.CUT_FEED);

    print.send();
  };

  return (
    <div id="thermalPrinter">
      <input id="printerIPAddress" placeholder="Printer IP Address" value={printerIPAddress} onChange={(e) => setPrinterIPAddress(e.currentTarget.value)} />
      <input id="printerPort" placeholder="Printer Port" value={printerPort} onChange={(e) => setPrinterPort(e.currentTarget.value)} />
      <button disabled={connectionStatus === STATUS_CONNECTED} onClick={() => connect()}>
        Connect
      </button>
      <span className="status-label">{connectionStatus}</span>
      <hr />
      <hr />
      <input
        id="printTitle"
        placeholder="Print Title"
        value={printOptions?.title}
        onChange={(e) =>
          setPrintOptions((printOptions) => ({
            ...printOptions,
            title: e.target.value,
          }))
        }
      />
      <textarea
        id="textToPrint"
        rows={3}
        placeholder="Text to print"
        value={printOptions?.text}
        onChange={(e) =>
          setPrintOptions((printOptions) => ({
            ...printOptions,
            text: e.target.value,
          }))
        }
      />
      <button disabled={connectionStatus !== STATUS_CONNECTED} onClick={() => print(printOptions)}>
        Print
      </button>
    </div>
  );
};

export default ThermalPrinter;
