import { useState, type DragEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import UploadIcon from "../../icons/upload.svg?react";

export function DropZone() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    setIsDragging(false);
    console.log(e.dataTransfer.files);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? [];
    console.log(files);
    event.target.value = "";
  };

  const bgStyles = isDragging
    ? "bg-stone-100"
    : "bg-stone-50 hover:bg-stone-100";

  return (
    <>
      <input
        type="file"
        name="files"
        multiple
        hidden
        accept="image/png, image/jpeg"
        id="modal-upload"
        onChange={handleFileChange}
      />
      <label
        htmlFor="modal-upload"
        role="button"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={twMerge(
          "rounded-lg flex flex-col items-center mt-6 border border-gray-200 md:px-32 sm:px-16 px-12 py-12 cursor-grab",
          bgStyles,
        )}
      >
        <div className="rounded-full bg-white p-3 shadow-md">
          <UploadIcon className="w-6 h-6 fill-indigo-700" />
        </div>
        <h3 className="text-center text-gray-900 font-medium mt-6">
          Click or drag and drop to upload
        </h3>
        <span className="text-center text-gray-500">PNG, or JPG (Max 5MB)</span>
      </label>
    </>
  );
}
