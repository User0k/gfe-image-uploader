import { useRef } from "react";
import { Button } from "../Button/Button";
import { UploadModal } from "../UploadModal/UploadModal";
import { Avatar } from "./Avatar";
import { UserDetails } from "./UserDetails";
import { UserLocation } from "./UserLocation";
import { CropModal } from "../CropModal/CropModal";
import { ProfileDetails, ProfileLocation, Image } from "../../types";

type CardProps = {
  userName: string;
  details: ProfileDetails;
  location: ProfileLocation;
  images: Image[];
};

export function UserCard({ userName, details, location, images }: CardProps) {
  const uploadModalRef = useRef<HTMLDialogElement>(null);
  const cropModalRef = useRef<HTMLDialogElement>(null);
  const avatarUrl = images.find((image) => image.selected)?.fullImage;

  return (
    <article className="md:max-w-180 max-w-106 w-full mx-auto bg-white rounded-lg shadow-lg">
      <header className="relative sm:h-42 h-32 bg-cover bg-center bg-[url(/cover.jpg)] rounded-tl-lg rounded-tr-lg">
        <Avatar imageSrc={avatarUrl} />
      </header>
      <section className="sm:px-6 px-4">
        <div className="flex justify-end sm:mt-4 mt-2 sm:mb-6 mb-2">
          <Button
            onClick={() => cropModalRef.current?.showModal()}
            className="shadow"
          >
            Update picture
          </Button>
        </div>
        <h1 className="font-semibold sm:text-3xl text-2xl text-gray-800 mb-6">
          {userName}
        </h1>
        <UserDetails {...details} />
        <UserLocation {...location} />
        <UploadModal ref={uploadModalRef} />
        <CropModal ref={cropModalRef} />
      </section>
    </article>
  );
}
