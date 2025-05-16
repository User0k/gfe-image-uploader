import { Button } from "../Button/Button";
import CloseIcon from "../../icons/close.svg?react";
import UploadIcon from "../../icons/upload.svg?react";

export function UploadModal() {
  return (
    <dialog
      open
      className="z-1 m-auto max-h-[90%] overflow-auto rounded-lg px-5 py-6 backdrop:bg-neutral-950"
    >
      <form>
        <h2 className="flex items-center justify-between pb-2 font-medium text-xl text-gray-900">
          Upload image(s)
          <button value="cancel" formMethod="dialog" className="cursor-pointer">
            <CloseIcon className="w-4 h-4 fill-gray-500 hover:fill-red-600" />
          </button>
        </h2>
        <span className="text-gray-500 pb-2">
          You may upload up to 5 images
        </span>
        <input
          type="file"
          multiple
          hidden
          accept="image/png, image/jpeg"
          id="modal-upload"
        />
        <label
          htmlFor="modal-upload"
          role="button"
          className="rounded-lg flex flex-col items-center mt-6 border border-gray-200 md:px-32 sm:px-16 px-12 py-12 cursor-grab"
        >
          <div className="rounded-full bg-white p-3 shadow-md">
            <UploadIcon className="w-6 h-6 fill-indigo-700" />
          </div>
          <h3 className="text-center text-gray-900 font-medium mt-6">
            Click or drag and drop to upload
          </h3>
          <span className="text-center text-gray-500">
            PNG, or JPG (Max 5MB)
          </span>
        </label>
      </form>
      <div className="flex justify-between align-center mt-6">
        <Button>Cancel</Button>
        <Button variant="contained" color="confirm" className="ml-4">
          Select image
        </Button>
      </div>
    </dialog>
  );
}
