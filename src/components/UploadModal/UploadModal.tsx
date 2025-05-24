import { Button } from "../Button/Button";
import { DropZone } from "./DropZone";
import { Modal } from "../Modal/Modal";
import { type RefObject } from "react";
import { PreviewItem, ThumbPreview } from "./PreviewItem";

export type UploadModalProps = {
  ref: RefObject<HTMLDialogElement | null>;
};

const mockedImages: (ThumbPreview & { id: string })[] = [
  {
    id: "1",
    src: "/avatar.jpg",
    fileName: "First image",
    fileSize: 234567,
    status: "stored",
    checked: true,
  },
  {
    id: "2",
    src: "/image.jpg",
    fileName: "Something",
    fileSize: 2234567,
    status: "stored",
    checked: false,
  },
  {
    id: "3",
    src: "/avatar.jpg",
    fileName: "IMG_1256.jpg",
    fileSize: 34567,
    status: "uploaded",
    checked: false,
  },
  {
    id: "4",
    src: "/image.jpg",
    fileName: "IMG_34523.png",
    fileSize: 34567,
    status: "error",
    checked: false,
  },
];

export function UploadModal({ ref }: UploadModalProps) {
  const handleClose = () => ref.current?.close();

  const handleSubmit = () => {
    ref.current?.close();
    console.log("image changed");
  };

  return (
    <Modal ref={ref} title="Upload image(s)">
      <span className="text-gray-500 pb-2">You may upload up to 5 images</span>
      <form>
        <DropZone />
      </form>
      <div className="mt-6">
        {mockedImages.map((image) => (
          <PreviewItem {...image} key={image.id} />
        ))}
      </div>
      <div className="flex justify-between align-center mt-6">
        <Button fullWidth onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="confirm"
          fullWidth
          onClick={handleSubmit}
          className="ml-4"
        >
          Select image
        </Button>
      </div>
    </Modal>
  );
}
