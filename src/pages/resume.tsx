import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import myResume from "../assets/Resume Ismael Galarza 2025.pdf";
import "../styles/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumePage = () => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <button className="back-button" onClick={() => navigate("/")}>
            {" "}
            ← Back to Home
          </button>
          href={myResume}
          download="Resume_Ismael_Galarza_2025.pdf" className="download-button"
          <a>Download PDF</a>
        </div>

        <h1 className="resume-title">My Resume</h1>

        <div className="pdf-viewer">
          <Document
            file={myResume}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="loading">Loading resume...</div>}
            error={
              <div className="error">
                Failed to load PDF. Please try downloading it.
              </div>
            }>
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={Math.min(window.innerWidth - 100, 800)}
            />
          </Document>
        </div>

        {numPages > 1 && (
          <div className="pdf-controls">
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber <= 1}
              className="control-button">
              Previous
            </button>
            <span className="page-info">
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, numPages))
              }
              disabled={pageNumber >= numPages}
              className="control-button">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
