import { Button } from "../Button/Button";
import { DropZone } from "./DropZone";
import { Modal } from "../Modal/Modal";
import { type RefObject } from "react";

export type UploadModalProps = {
  ref: RefObject<HTMLDialogElement | null>;
};

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
