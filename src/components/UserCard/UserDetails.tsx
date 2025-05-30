import { twMerge } from "tailwind-merge";
import { ProfileDetails } from "../../types";

const twStyles = {
  gray: "text-gray-500",
  default: {
    list: "flex flex-wrap items-center gap-2 text-xl pb-2",
    li: "flex items-center gap-2",
    divider: "font-black text-gray-500 pb-2",
  },
  small: {
    list: "max-sm:flex-col max-sm:items-start",
    hidden: "max-sm:hidden",
  },
};

export function UserDetails(props: ProfileDetails) {
  const { companyName, companyIconUrl, jobTitle, pronouns, nickName } = props;

  return (
    <ul className={twMerge(twStyles.default.list, twStyles.small.list)}>
      {nickName && <li>{nickName}</li>}
      <li>
        <p className={twStyles.default.li}>
          {nickName && (
            <span
              className={twMerge(
                twStyles.default.divider,
                twStyles.small.hidden,
              )}
            >
              .
            </span>
          )}
          {jobTitle}
        </p>
      </li>
      <li className={twStyles.default.li}>
        <span className={twStyles.gray}>at</span>
        {companyIconUrl && (
          <img src={companyIconUrl} alt="Company" className="max-h-6" />
        )}
        {companyName}
        {pronouns && (
          <p className={twMerge(twStyles.default.li, twStyles.gray)}>
            <span className={twStyles.default.divider}>.</span>
            {pronouns}
          </p>
        )}
      </li>
    </ul>
  );
}
