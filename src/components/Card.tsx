import { getFlagEmoji } from "../utils/getFlagEmoji";

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
  image: {
    url: string;
  };
}

function Card({ userName, details, location, image: { url } }: CardProps) {
  const flagEmoji = getFlagEmoji("Canada");

  return (
    <article className="card max-w-180 w-full mx-auto bg-white rounded-lg shadow-lg">
      <header className="relative h-42 bg-cover bg-center bg-[url(/cover.jpg)] rounded-tl-lg rounded-tr-lg">
        <div className="absolute top-16 left-8 max-sm:top-18 max-sm:left-4">
          <div className="relative w-40 h-40 overflow-hidden rounded-full border-6 border-white max-sm:w-24 max-sm:h-24 max-sm:border-3">
            <img
              className="absolute top-[-20px] h-50 w-auto object-cover max-sm:top-[-12px] max-sm:h-30"
              src={url}
              alt="avatar"
            />
          </div>
        </div>
      </header>
      <section className="sm:px-6 px-4">
        <div className="flex justify-end sm:mt-4 mt-2 sm:mb-6 mb-2">
          <button
            className="cursor-pointer 
            rounded-md font-semibold py-2 sm:px-4 px-2 sm:text-base text-sm
            border-1 border-gray-200 text-gray-800 hover:bg-gray-100"
          >
            Update picture
          </button>
        </div>
        <h1 className="font-semibold sm:text-3xl text-2xl text-gray-800 mb-6">
          {userName}
        </h1>
        <ul className="flex flex-wrap items-center gap-2 text-xl pb-2 max-sm:flex-col max-sm:items-start">
          {details.nickName && <li>{details.nickName}</li>}
          <li>
            <p className="flex items-center gap-2">
              <span className="font-black text-gray-500 pb-2 max-sm:hidden">
                .
              </span>
              {details.jobTitle}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-500">at</span>
            {details.companyIconUrl && (
              <img
                src={details.companyIconUrl}
                alt={`${details.companyIconUrl} logo`}
                className="max-h-6"
              />
            )}
            {details.companyName}
            {details.pronouns && (
              <p className="flex items-center gap-2 text-gray-500">
                <span className="font-black text-gray-500 pb-2">.</span>
                {details.pronouns}
              </p>
            )}
          </li>
        </ul>
        <footer className="flex items-center text-gray-500 pb-8">
          <span
            aria-label={`Flag of ${location.country}`}
            role="img"
            className="text-xl"
          >
            {flagEmoji}
          </span>
          <span className="text-lg pl-4">
            {location.city}, {location.country}
          </span>
        </footer>
      </section>
    </article>
  );
}

export default Card;
