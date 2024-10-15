import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1815px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-41xl text-black font-pt-serif ${className}`}
    >
      <div className="w-[1355px] flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
        <div className="w-[687px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full mq925:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full z-[1] mq925:gap-4">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full mq925:gap-[120px] mq450:gap-[60px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 box-border max-w-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[80px] font-bold font-[inherit] inline-block max-w-full mq925:text-29xl mq925:leading-[64px] mq450:text-17xl mq450:leading-[48px]">
                    <span>{`Welcome to `}</span>
                    <span className="text-forestgreen">Pay My Lawyer</span>
                  </h1>
                </div>
                <div className="w-[576px] flex flex-row items-center justify-center p-2.5 box-border max-w-full text-5xl text-gray font-poppins">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[37px] font-normal font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[30px]">
                    Streamline Your Practice. Connect with Clients. Grow Your
                    Network.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-8 min-w-[463px] max-w-full text-xl text-text-default font-heading-h5 mq925:min-w-full mq450:gap-4 mq450:flex-wrap mq1350:flex-1">
          <div className="flex-1 shadow-[0px_4px_14px_rgba(0,_0,_0,_0.15)] rounded-xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-4 min-w-[141px] z-[1]">
            <img
              className="w-[214px] h-[214px] relative rounded-2xl overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-8.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
              <div className="flex-1 flex flex-col items-start justify-start gap-1">
                <div className="self-stretch relative tracking-[-0.03em] leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                  Find a Lawyer
                </div>
                <div className="self-stretch relative text-sm leading-[160%] font-medium font-text-small text-text-muted">
                  See Attorney directory
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[141px] min-h-[300px]">
            <div className="self-stretch h-[300px] flex flex-row items-start justify-start py-0 pl-px pr-0.5 box-border">
              <div className="self-stretch flex-1 shadow-[0px_4px_14px_rgba(0,_0,_0,_0.15)] rounded-xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-4 z-[1] mq450:flex-1">
                <div className="self-stretch flex-1 relative rounded-2xl bg-mistyrose overflow-hidden" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex-1 flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch relative tracking-[-0.03em] leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                      Legal Professional
                    </div>
                    <div className="self-stretch relative text-sm leading-[160%] font-medium font-text-small text-text-muted">
                      Accept payments
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lgi flex flex-row items-start justify-end pt-1 px-1.5 pb-[170px] bg-[url('/image-2@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2] mt-[-300px]">
              <img
                className="h-[214px] w-[217px] relative rounded-lgi object-cover hidden"
                alt=""
                src="/image-2@2x.png"
              />
              <img
                className="h-10 w-10 relative object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/check-fill@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
