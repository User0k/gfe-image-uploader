import ReactCrop, { makeAspectCrop, type Crop } from "react-image-crop";
import { useRef, useState, type RefObject } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import "react-image-crop/dist/ReactCrop.css";

export type CropModalProps = {
  ref: RefObject<HTMLDialogElement | null>;
};

export function CropModal({ ref }: CropModalProps) {
  const handleClose = () => ref.current?.close();

  const handleSubmit = () => {
    ref.current?.close();
    console.log("image changed");
  };

  const imageRef = useRef<HTMLImageElement>(null);
  const maxImageSize = 440;
  const minSizePx = 100;
  const aspectRatio = 1;
  const [crop, setCrop] = useState<Crop>();
  const handleLoadImage = () => {
    if (imageRef.current) {
      const { naturalWidth, naturalHeight } = imageRef.current;
      let imageRatio = 1;
      if (Math.max(naturalWidth, naturalHeight) > maxImageSize) {
        imageRatio =
          naturalWidth < naturalHeight
            ? maxImageSize / naturalHeight
            : maxImageSize / naturalWidth;
      }
      const width = imageRatio * naturalWidth;
      const height = imageRatio * naturalHeight;
      // not a center, but top-left corner of the crop
      const x = (width - minSizePx) / 2;
      const y = (height - minSizePx) / 2;
      const aspectCrop = makeAspectCrop(
        {
          unit: "px",
          width: minSizePx,
          x,
          y,
        },
        aspectRatio,
        width,
        height,
      );
      setCrop(aspectCrop);
    }
  };

  return (
    <Modal ref={ref} title="Crop your image">
      <div
        className="flex justify-center items-center bg-gray-950 mt-4"
        style={{
          width: `${maxImageSize}px`,
          height: `${maxImageSize}px`,
        }}
      >
        <ReactCrop
          crop={crop}
          onChange={(pixelCrop) => setCrop(pixelCrop)}
          aspect={aspectRatio}
          circularCrop
          keepSelection
          minWidth={minSizePx}
        >
          <img
            src={"/image.jpg"}
            alt="Cropping image"
            ref={imageRef}
            onLoad={handleLoadImage}
            style={{
              maxWidth: `${maxImageSize}px`,
              maxHeight: `${maxImageSize}px`,
            }}
          />
        </ReactCrop>
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
          Confirm
        </Button>
      </div>
    </Modal>
  );
}
