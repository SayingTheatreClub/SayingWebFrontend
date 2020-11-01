import React, { FC, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Popup from "reactjs-popup";
import { ArrowSvg } from "../Arrow";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfProps {
  file: string;
  open: boolean;
  onClose: () => void;
}

const Pdf: FC<PdfProps> = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { file, open, onClose } = props;
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  function handleClickLeft() {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
    return;
  }
  function handleClickRight() {
    if (pageNumber === numPages) return;
    setPageNumber(pageNumber + 1);
  }
  return (
    <Popup
      onClose={onClose}
      open={open}
      contentStyle={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ArrowSvg isLeft onClick={handleClickLeft} className="pdf-arrow-left" />
      <Document
        file={`https://sayingtheatre.com/${file}`}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          cMapUrl: "cmaps/",
          cMapPacked: true,
        }}
      >
        <Page pageNumber={pageNumber} width={600} />
      </Document>
      <ArrowSvg onClick={handleClickRight} className="pdf-arrow-right" />
    </Popup>
  );
};

export default Pdf;
