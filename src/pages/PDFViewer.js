import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="sample.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages), 
          (el, index) => (
            <Page 
              key={`page_${index + 1}`}
              pageNumber={index + 1} 
            />
          )
        )}
      </Document>
    </div>
  );
}
