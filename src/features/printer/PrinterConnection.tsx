import React, { useState, useRef } from "react";
import { Printer, EPOSDeviceInstance, EPOSDeviceConstructor } from "../../common/epos-device";

declare global {
  interface Window {
    epson: { ePOSDevice: EPOSDeviceConstructor };
  }
}

interface PrinterConnectionProps {
  onConnect: (printer: Printer) => void;
  isConnected: boolean;
}

const PrinterConnection: React.FC<PrinterConnectionProps> = ({ onConnect, isConnected }) => {
  const [printerIPAddress, setPrinterIPAddress] = useState<string>("192.168.0.168");
  const [printerPort, setPrinterPort] = useState<string>("8008");
  const [connectionStatus, setConnectionStatus] = useState<string>("");
  const ePosDevice = useRef<EPOSDeviceInstance | null>(null);

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
          onConnect(data);
          setConnectionStatus(STATUS_CONNECTED);
        });
      },
      { eposprint: true }
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-4">
      <div className="mb-4">
        <label htmlFor="printerIPAddress" className="block text-gray-700 text-sm font-bold mb-2">
          Printer IP Address
        </label>
        <input
          id="printerIPAddress"
          placeholder="Printer IP Address"
          value={printerIPAddress}
          onChange={(e) => setPrinterIPAddress(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="printerPort" className="block text-gray-700 text-sm font-bold mb-2">
          Printer Port
        </label>
        <input
          id="printerPort"
          placeholder="Printer Port"
          value={printerPort}
          onChange={(e) => setPrinterPort(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm">{connectionStatus}</span>
        <button
          disabled={connectionStatus === STATUS_CONNECTED}
          onClick={connect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default PrinterConnection;
