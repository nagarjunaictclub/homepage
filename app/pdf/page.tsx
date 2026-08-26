"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import dynamic from "next/dynamic";
import React from "react";

const PDFViewerComponent = dynamic(
  () => import("../../components/PDFViewer/index"),
  {
    ssr: false,
  }
);

// const downloadPdf = () => {
//   fetch("/assets/pdfs/VersionControlSystem.pdf", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/pdf",
//     },
//   })
//     .then((res) => res.blob())
//     .then((blob) => {
//       // Create blob link to download
//       const url = window.URL.createObjectURL(new Blob([blob]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "/assets/pdfs/VersionControlSystem.pdf");

//       document.body.appendChild(link);

//       link.click();

//       link.parentNode.removeChild(link);
//     });
// };

export default function PDF() {
  return (
    <>
      {/* <Breadcrumb
        pageName="PDF Page"
        description="See our Research Papers on various topics."
      /> */}
      <section className="px-4 pb-[50px] pt-[10rem]">
        <div className="container !p-0">
          <PDFViewerComponent />
          {/* <button
            onClick={downloadPdf}
            className=" rounded-md bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
          >
            Download
          </button> */}
        </div>
      </section>
    </>
  );
}
