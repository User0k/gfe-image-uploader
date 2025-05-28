import { convertFromBytes } from "../../utils/convertFromBytes";
import { Button } from "../Button/Button";
import { Radio } from "../radio/Radio";
import CropIcon from "../../icons/crop.svg?react";
import DeleteIcon from "../../icons/delete.svg?react";
import CloseIcon from "../../icons/close.svg?react";
import CheckIcon from "../../icons/check.svg?react";

export type ThumbPreview = {
  src: string;
  fileName: string;
  fileSize: number;
  status: "stored" | "uploading" | "uploaded" | "error";
  checked: boolean;
};

export function PreviewItem({
  src,
  fileName,
  fileSize,
  status,
  checked,
  onSelectChange,
}: ThumbPreview & {
  onSelectChange: () => void;
}) {
  const size = convertFromBytes(fileSize);

  return (
    <div className="flex justify-between mt-5">
      <div className="flex">
        <img
          src={src}
          alt="File thumbnail"
          className="rounded-sm w-[80px] h-[80px] object-cover mr-4"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h6 className="font-semibold leading-none">{fileName}</h6>
            <span className="text-xs text-gray-500 leading-6">{size}</span>
          </div>
          {status === "stored" && (
            <div className="flex leading-5">
              <Button
                variant="text"
                size="small"
                className="pl-0 pb-0 hover:text-indigo-700"
              >
                <CropIcon /> Crop
              </Button>
              <div className="font-bold">.</div>
              <Button
                variant="text"
                size="small"
                className="pb-0 hover:text-red-600"
              >
                <DeleteIcon /> Delete
              </Button>
            </div>
          )}
          {status === "uploaded" && (
            <div className="flex items-center">
              <CheckIcon className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-xs text-green-600">Upload success!</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center">
              <CloseIcon className="w-3 h-3 fill-red-600 mr-2" />
              <span className="text-xs text-red-600">Upload failure!</span>
            </div>
          )}
        </div>
      </div>
      {status === "stored" && (
        <Radio
          type="radio"
          name="thumb-radio"
          checked={checked}
          onChange={onSelectChange}
        />
      )}
      {status === "uploaded" && (
        <CloseIcon className="w-3 h-3 text-gray-500 cursor-pointer hover:fill-red-600" />
      )}
    </div>
  );
}
