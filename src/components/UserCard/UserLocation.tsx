import { getFlagEmoji } from "../../utils/getFlagEmoji";
import { ProfileLocation } from "../../types";

export function UserLocation({ city, country }: ProfileLocation) {
  const flagEmoji = getFlagEmoji(country);
  return (
    <footer className="flex items-center text-gray-500 pb-8">
      <span aria-label={`${country} flag`} role="img" className="text-xl">
        {flagEmoji}
      </span>
      <span className="text-lg pl-4">
        {city}, {country}
      </span>
    </footer>
  );
}
