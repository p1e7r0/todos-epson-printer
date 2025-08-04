import React, { useState } from "react";
import { Printer } from "../../common/epos-device";
import { Checkbox } from "@/common/components/ui/checkbox";
import { Label } from "@/common/components/ui/label";

interface PrintFormProps {
  printer: Printer | null;
}

interface TypographyOptions {
  text: string;
  size: number;
  bold: boolean;
}

interface PrintOptions {
  title: TypographyOptions;
  body: TypographyOptions;
}

const initialPrintOptions: PrintOptions = {
  title: { text: "", size: 2, bold: true },
  body: { text: "", size: 1, bold: true },
};

const PrintForm: React.FC<PrintFormProps> = ({ printer }) => {
  const [printOptions, setPrintOptions] = useState<PrintOptions>(initialPrintOptions);

  const print = ({ title, body }: PrintOptions) => {
    if (!printer) {
      alert("Not connected to printer");
      return;
    }

    if (title.text) {
      printer.addTextStyle(false, false, true);
      printer.addTextSize(title.size, title.size);
      printer.addText(title.text + "\n");
    }

    if (body.text) {
      printer.addTextStyle(false, false, body.bold);
      printer.addTextSize(body.size, body.size);
      printer.addText(body.text);
      printer.addFeedLine(5);
    }

    printer.addCut(printer.CUT_FEED);
    printer.send();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w grid-cols-2 gap-1">
      <div className="flex flex-row align-center justify-between gap-4">
        <div className="flex-1">
          <label htmlFor="printTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            id="printTitle"
            placeholder="Print Title"
            value={printOptions.title.text}
            onChange={(e) =>
              setPrintOptions((printOptions) => ({
                ...printOptions,
                title: { ...printOptions.title, text: e.target.value },
              }))
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
          />
        </div>
        <div>
          <label htmlFor="textSize" className="block text-gray-700 text-sm font-bold mb-2 ">
            Text Size
          </label>
          <input
            type="number"
            id="titleSize"
            placeholder="Title Size"
            value={printOptions?.title.size}
            onChange={(e) =>
              setPrintOptions((printOptions) => ({
                ...printOptions,
                title: {
                  ...printOptions.title,
                  size: parseInt(e.target.value, 10) || initialPrintOptions.title.size,
                },
              }))
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
            min={1}
            max={3}
            step={1}
          />
        </div>
        <div>
          <label htmlFor="bodyBold" className="inline-flex items-center mt-4">
            <input
              type="checkbox"
              id="bodyBold"
              checked={printOptions?.body.bold}
              onChange={(e) =>
                setPrintOptions((printOptions) => ({
                  ...printOptions,
                  title: { ...printOptions.title, bold: e.target.checked },
                }))
              }
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Bold Text</span>
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="textToPrint" className="block text-gray-700 text-sm font-bold mb-2">
          Text
        </label>
        <textarea
          id="textToPrint"
          rows={10}
          placeholder="Text to print"
          value={printOptions?.body.text}
          onChange={(e) =>
            setPrintOptions((printOptions) => ({
              ...printOptions,
              body: { ...printOptions.body, text: e.target.value },
            }))
          }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
        />
        <div className="flex flex-row gap-1">
          <label htmlFor="textSize" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            Text Size
          </label>
          <input
            type="number"
            id="textSize"
            placeholder="Text Size"
            value={printOptions?.body.size}
            onChange={(e) =>
              setPrintOptions((printOptions) => ({
                ...printOptions,
                body: {
                  ...printOptions.body,
                  size: parseInt(e.target.value, 10) || initialPrintOptions.body.size,
                },
              }))
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
            min={1}
            max={3}
            step={1}
          />
        </div>
        <div>
          <label htmlFor="bodyBold" className="inline-flex items-center mt-4">
            <input
              type="checkbox"
              id="bodyBold"
              checked={printOptions?.body.bold}
              onChange={(e) =>
                setPrintOptions((printOptions) => ({
                  ...printOptions,
                  body: { ...printOptions.body, bold: e.target.checked },
                }))
              }
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Bold Text</span>
          </label>
        </div>
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
