import UploadIcon from "../../icons/upload.svg?react";

export function DropZone() {
  const handleClick = () => {
    console.log("upload");
  };

  return (
    <>
      <input
        type="file"
        name="files"
        multiple
        hidden
        accept="image/png, image/jpeg"
        id="modal-upload"
      />
      <label
        htmlFor="modal-upload"
        role="button"
        onClick={handleClick}
        className="rounded-lg flex flex-col items-center mt-6 border border-gray-200 md:px-32 sm:px-16 px-12 py-12 cursor-grab"
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
