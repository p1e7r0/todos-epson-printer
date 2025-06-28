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
    <div>
      <input id="printerIPAddress" placeholder="Printer IP Address" value={printerIPAddress} onChange={(e) => setPrinterIPAddress(e.currentTarget.value)} />
      <input id="printerPort" placeholder="Printer Port" value={printerPort} onChange={(e) => setPrinterPort(e.currentTarget.value)} />
      <button disabled={connectionStatus === STATUS_CONNECTED} onClick={connect}>
        Connect
      </button>
      <span className="status-label">{connectionStatus}</span>
    </div>
  );
};

export default PrinterConnection;
