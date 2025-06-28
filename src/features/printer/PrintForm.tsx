import React, { useState } from "react";
import { Printer } from "../../common/epos-device";

interface PrintFormProps {
  printer: Printer | null;
}

interface PrintOptions {
  title: string;
  text: string;
}

const PrintForm: React.FC<PrintFormProps> = ({ printer }) => {
  const [printOptions, setPrintOptions] = useState<PrintOptions>({
    title: "",
    text: "",
  });

  const print = ({ title, text }: { title: string; text: string }) => {
    if (!printer) {
      alert("Not connected to printer");
      return;
    }

    printer.addTextStyle(false, false, true);
    // printer.addTextSize(3, 3);
    // printer.addText(title + "\n");
    // printer.addTextStyle(false, false, false);
    printer.addTextSize(1, 1);
    printer.addText(text);
    printer.addFeedLine(5);
    printer.addCut(printer.CUT_FEED);

    printer.send();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="printTitle" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="textToPrint" className="block text-gray-700 text-sm font-bold mb-2">
          Text
        </label>
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          disabled={!printer}
          onClick={() => print(printOptions)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default PrintForm;
