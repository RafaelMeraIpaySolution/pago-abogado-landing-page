import type { NextPage } from "next";

export type SearchIconType = {
  className?: string;
};

const SearchIcon: NextPage<SearchIconType> = ({ className = "" }) => {
  return (
    <img
      className={`h-[15px] w-[15px] relative overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/search.svg"
    />
  );
};

export default SearchIcon;
