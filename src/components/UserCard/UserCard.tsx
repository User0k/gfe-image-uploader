import { Button } from "../Button/Button";
import { UploadModal } from "../UploadModal/UploadModal";
import { Avatar } from "./Avatar";
import { UserDetails } from "./UserDetails";
import { UserLocation } from "./UserLocation";

interface CardProps {
  userName: string;
  details: {
    companyName: string;
    jobTitle: string;
    companyIconUrl?: string;
    nickName?: string;
    pronouns?: string;
  };
  location: { country: string; city: string };
  imageSrc: string;
}

export function UserCard({ userName, details, location, imageSrc }: CardProps) {
  return (
    <article className="card max-w-180 w-full mx-auto bg-white rounded-lg shadow-lg">
      <header className="relative sm:h-42 h-32 bg-cover bg-center bg-[url(/cover.jpg)] rounded-tl-lg rounded-tr-lg">
        <Avatar imageSrc={imageSrc} />
      </header>
      <section className="sm:px-6 px-4">
        <div className="flex justify-end sm:mt-4 mt-2 sm:mb-6 mb-2">
          <Button>Update picture</Button>
        </div>
        <h1 className="font-semibold sm:text-3xl text-2xl text-gray-800 mb-6">
          {userName}
        </h1>
        <UserDetails {...details} />
        <UserLocation {...location} />
      </section>
      <UploadModal />
    </article>
  );
}
