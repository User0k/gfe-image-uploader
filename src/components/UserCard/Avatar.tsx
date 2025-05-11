import { twMerge } from "tailwind-merge";

const twStyles = {
  default: {
    avatar: "absolute top-16 left-8",
    circle:
      "relative w-40 h-40 overflow-hidden rounded-full border-6 border-white",
    img: "absolute top-[-20px] h-50 w-auto object-cover",
  },
  small: {
    avatar: "max-sm:top-18 max-sm:left-4",
    circle: "max-sm:w-24 max-sm:h-24 max-sm:border-3",
    img: "max-sm:top-[-12px] max-sm:h-30",
  },
};

export function Avatar({ imageSrc }: { imageSrc: string }) {
  return (
    <div className={twMerge(twStyles.default.avatar, twStyles.small.avatar)}>
      <div className={twMerge(twStyles.default.circle, twStyles.small.circle)}>
        <img
          className={twMerge(twStyles.default.img, twStyles.small.img)}
          src={imageSrc}
          alt="avatar"
        />
      </div>
    </div>
  );
}
