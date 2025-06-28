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
    printer.addTextSize(2, 2);
    printer.addText(title + "\n");
    printer.addTextStyle(false, false, false);
    printer.addTextSize(1, 1);
    printer.addText(text);
    printer.addFeedLine(5);
    printer.addCut(printer.CUT_FEED);

    printer.send();
  };

  return (
    <div>
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
      <button disabled={!printer} onClick={() => print(printOptions)}>
        Print
      </button>
    </div>
  );
};

export default PrintForm;
