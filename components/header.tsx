import type { NextPage } from "next";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center py-2.5 px-5 box-border max-w-full z-[1] ${className}`}
    >
      <div className="w-[1440px] flex flex-col items-center justify-center py-2.5 pl-0 pr-2.5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full">
          <div className="flex flex-row items-center justify-center py-2.5 pl-0 pr-2.5">
            <img
              className="h-[78px] w-[74px] relative object-cover"
              loading="lazy"
              alt=""
              src="/image-1-1@2x.png"
            />
          </div>
          <div className="w-[840px] flex flex-row items-center justify-end py-5 px-0 box-border gap-[37px] max-w-full mq450:gap-[18px] mq1800:w-[187px]">
            <nav className="m-0 flex-1 flex flex-row items-center justify-end gap-5 max-w-full text-left text-base text-black font-poppins mq1800:hidden">
              <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                <a className="[text-decoration:none] relative text-[inherit]" />
              </div>
              <select className="flex-1 bg-[transparent] [border:none] flex flex-row items-center justify-center py-2.5 px-[9px] font-poppins text-base text-black" />
              <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                <a className="[text-decoration:none] relative text-[inherit]" />
              </div>
              <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[65px]" />
              </div>
              <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[84px]" />
              </div>
              <div className="flex-1 flex flex-row items-center justify-center py-2.5 px-[9px]">
                <a className="[text-decoration:none] relative text-[inherit]" />
              </div>
            </nav>
            <button className="cursor-pointer [border:none] py-2.5 px-11 bg-black rounded-8xs flex flex-row items-center justify-center hover:bg-dimgray-200">
              <a className="[text-decoration:none] flex-1 relative text-lg font-medium font-poppins text-white text-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
