import type { NextPage } from "next";

export type ChevronDownIconType = {
  className?: string;
};

const ChevronDownIcon: NextPage<ChevronDownIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-4 w-full relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/chevrondown.svg"
    />
  );
};

export default ChevronDownIcon;
