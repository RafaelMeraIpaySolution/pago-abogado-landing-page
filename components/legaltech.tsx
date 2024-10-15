import type { NextPage } from "next";

export type LegaltechType = {
  className?: string;
};

const Legaltech: NextPage<LegaltechType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1450px] max-w-full flex flex-col items-center justify-start py-0 px-5 box-border leading-[normal] tracking-[normal] mq750:gap-[23px] ${className}`}
    >
      <section className="flex flex-col items-center justify-start gap-[7px] max-w-full text-center text-41xl text-forestgreen font-pt-serif">
        <div className="flex flex-row items-center justify-center py-2.5 px-[199px] lg:pl-[99px] lg:pr-[99px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[49px] mq750:pr-[49px] mq750:box-border">
          <h1 className="m-0 relative text-inherit leading-[80px] font-bold font-[inherit] mq450:text-17xl mq450:leading-[48px] mq1050:text-29xl mq1050:leading-[64px]">
            <span>Legaltech</span>
            <span className="text-black whitespace-pre-wrap">
              {" "}
              Built by Lawyers
            </span>
            <span className="text-primary">{` `}</span>
          </h1>
        </div>
        <div className="w-[1104px] flex flex-row items-center justify-center p-2.5 box-border max-w-full text-5xl text-gray font-poppins">
          <div className="flex-1 relative leading-[37px] inline-block max-w-full mq450:text-lgi mq450:leading-[30px]">
            Pay My Lawyer isn’t just a payment processing tool, it’s a
            comprehensive platform designed to help you manage your practice
            more efficiently while expanding your client base and connecting
            with fellow attorneys.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legaltech;
