import type { NextPage } from "next";
import SearchIcon from "./search-icon";

export type Top1Type = {
  className?: string;
};

const Top1: NextPage<Top1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[54px] bg-black flex flex-col items-center justify-center py-0 px-5 box-border max-w-full z-[1] text-left text-lg text-white font-rubik ${className}`}
    >
      <div className="w-[1440px] flex flex-row items-center justify-between py-[15px] px-3.5 box-border gap-5 max-w-full">
        <div className="w-[250px] rounded-8xs bg-gray1-400 flex flex-row items-center justify-start py-1.5 pl-2.5 pr-[146px] box-border gap-2 mq450:pr-5 mq450:box-border">
          <SearchIcon />
          <input
            className="w-[calc(100%_-_171px)] [border:none] [outline:none] font-poppins text-base bg-[transparent] flex-1 relative text-gray text-left inline-block min-w-[43px] p-0"
            placeholder="Search...."
            type="text"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[39px] max-w-full mq450:gap-[19px]">
          <div className="flex flex-row items-end justify-start gap-2.5">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/envelope-1.svg"
            />
            <a className="[text-decoration:none] relative text-[inherit]" />
          </div>
          <div className="flex flex-row items-start justify-start gap-3">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              alt=""
              src="/phone-1.svg"
            />
            <a className="[text-decoration:none] relative text-[inherit]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top1;
