"use client";
import React from "react";
import PDFWorker from "../PdfWorker";

const Pdfs = [
  { id: 0, label: "Version Control System" },
  { id: 1, label: "AI Research Report" },
  { id: 2, label: "The Hacking Methodology" },
];

const PDFViewerComponent = () => {
  const [activePdf, setActivePdf] = React.useState(() => {
    return (
      (typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined" &&
        JSON.parse(window.localStorage.getItem("activepdf"))) ||
      0
    );
  });

  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      localStorage.setItem("activepdf", JSON.stringify(activePdf));
    }
  }, [activePdf]);

  return (
    <div className=" grid  grid-cols-[1fr_3fr]">
      <div className=" bg-[#EEEEEE] ">
        {Pdfs.map((pdf) => {
          return (
            <div
              key={pdf.id}
              className={`"text-[#000]" w-full cursor-pointer items-center gap-2 border-b border-b-[#999999a3] bg-white p-3 py-4 ${
                activePdf === pdf.id ? " text-[#000]" : "text-[#898989]"
              }`}
              onClick={() => setActivePdf(pdf.id)}
            >
              <div className="flex items-center gap-2">
                <p className=" text-lg">
                  <i className="ri-file-pdf-line"></i>
                </p>
                <p className={`"sm:text-lg" `}>{pdf.label}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-[98vh]">
        {Pdfs.map((pdf) => {
          return (
            pdf.id === activePdf && (
             <p>Loading...</p>
            )
          );
        })}
      </div>
    </div>
  );
};

export default PDFViewerComponent;
