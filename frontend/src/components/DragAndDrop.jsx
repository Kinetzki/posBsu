import React, { useRef, useState } from "react";
import upload2 from "../assets/icons/upload2.svg";
import extractTextFromPDF from "../Utilit";
import { processData } from "../utils/extractValueKeys";
import Button1 from "./Button1";
import PopUp from "./PopUp";

function DragAndDrop({ setData }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [extract, setExtract] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    setFile(dropped);
    await handleExtractText(dropped);
  };

  const handleFileChange = async (e) => {
    //e.preventDefault();
    setFile(e.target.files[0]);
    await handleExtractText(e.target.files[0]);
  };

  const handleExtractText = async (droppedFile) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileUrl = event.target.result;
      try {
        const extractedText = await extractTextFromPDF(fileUrl);
        const importDat = processData(extractedText);
        setExtract(importDat);
      } catch (error) {
        console.error("Error extracting text:", error);
      }
    };

    reader.readAsDataURL(droppedFile);
    setIsUploaded(true);
  };

  return (
    <div className="flex flex-col w-full h-[600px] items-center gap-5">
      <div className="flex flex-col w-full px-[40px]">
        <h1 className="font-semibold text-[20px]">Upload Grades</h1>
        <p className="text-[13px]">
          Upload the pdf copy of your latest grades to generate course.
        </p>
      </div>
      <div
        className="w-[900px] h-[500px] rounded-2xl border-dashed border-slate-500 border-[2px] flex flex-col items-center justify-center gap-3 relative"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
          accept=".pdf"
        />

        <img src={upload2} alt="" className="w-[70px]" />
        <h1 className="font-semibold mb-3">Drag and drop here.</h1>

        {!isDragging && !isUploaded && (
          <Button1
            text="Browse Files"
            handleClick={() => {
              inputRef.current.click();
            }}
          />
        )}
        {isUploaded && (
          <PopUp
            text={"Grades Uploaded."}
            handleClick={async () => {
              await setData(extract);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default DragAndDrop;
