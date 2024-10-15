import type { NextPage } from "next";
import Button from "./button";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-60 box-border max-w-full text-left text-21xl text-black font-pt-serif mq925:pl-[60px] mq925:pr-[60px] mq925:box-border mq1350:pl-[120px] mq1350:pr-[120px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 shadow-[0px_1px_40px_rgba(183,_183,_183,_0.25)] rounded-mini bg-white flex flex-col items-start justify-start py-[30px] px-[39px] box-border max-w-full z-[3]">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 mq1800:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
              <h1 className="m-0 relative text-inherit leading-[37px] font-bold font-[inherit] mq925:text-13xl mq925:leading-[30px] mq450:text-5xl mq450:leading-[22px]">
                Your payment is just a click away
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center py-2.5 px-[9px] box-border max-w-full text-lg text-gray font-poppins">
              <div className="relative leading-[28px]">{`Services only offered to licensed attorneys within the United States. `}</div>
            </div>
          </div>
          <div className="h-[102px] w-[207px]" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
