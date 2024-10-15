import type { NextPage } from "next";

export type CredentialInputsType = {
  className?: string;
};

const CredentialInputs: NextPage<CredentialInputsType> = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch h-[627px] bg-ghostwhite flex flex-col items-start justify-start pt-[130px] px-0 pb-[113px] box-border gap-[69.3px] max-w-full z-[2] mt-[-85px] text-left text-9xl text-black font-pt-serif mq925:gap-[17px] mq1350:h-auto mq1350:gap-[35px] ${className}`}
    >
      <div className="self-stretch h-[627px] relative bg-ghostwhite hidden" />
      <div className="w-[32.4px] h-[32.7px] hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <div className="w-[1441px] flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
          <div className="w-[314px] flex flex-col items-start justify-start gap-[23px] text-3xs font-poppins">
            <img
              className="w-[74px] h-[78px] relative object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className="h-[179px] relative leading-[30px] whitespace-pre-wrap flex items-center shrink-0 z-[3]">
              Pay My Lawyer offers user-friendly, streamlined, secure payment
              processing tailored for law firms. Manage your client inventory,
              calendar, payment history, and referrals with ease. Designed by
              legal professionals for legal professionals. No subscription fees,
              just simple, transparent transaction pricing.
            </div>
            <button className="cursor-pointer [border:none] py-1.5 px-2.5 bg-colors-blue w-[87px] rounded-lgi flex flex-row items-center justify-center box-border z-[3]">
              <img
                className="h-[20.8px] w-[10.9px] relative"
                alt=""
                src="/icon-11.svg"
              />
            </button>
          </div>
          <div className="w-[464px] flex flex-row items-start justify-start gap-[132px] max-w-full mq450:gap-[66px] mq450:flex-wrap">
            <div className="flex flex-col items-center justify-start gap-3.5 z-[3] mq450:flex-1">
              <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[73px] mq450:text-3xl">
                Links
              </h2>
              <div className="flex flex-col items-start justify-center gap-2.5 text-base text-gray font-poppins">
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative">Home</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[71px]">
                    Features
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative">Pricing</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[73px]">
                    About Us
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[13px] min-w-[156px] z-[3]">
              <h2 className="m-0 relative text-inherit font-normal font-[inherit] mq450:text-3xl">{`Help & Support`}</h2>
              <div className="flex flex-col items-start justify-center gap-2.5 text-base text-gray font-poppins">
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[33px]">FAQ</div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[90px]">
                    Contact Us
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-2.5 px-[9px]">
                  <div className="relative inline-block min-w-[65px]">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[399px] flex flex-col items-start justify-start gap-[42px] max-w-full mq450:gap-[21px]">
            <div className="w-[359px] flex flex-col items-start justify-start gap-10 max-w-full z-[3] mq450:gap-5">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq450:text-3xl">
                Our Address
              </h2>
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px] text-lg font-poppins">
                <div className="flex flex-col items-start justify-start gap-[30px]">
                  <div className="flex flex-row items-end justify-start gap-4">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/envelope.svg"
                    />
                    <div className="relative">ceo@paymylawyer.cc</div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-3">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/phone.svg"
                    />
                    <div className="relative">(800) PayLawyer (729-5299)</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-6 mq450:flex-wrap">
                  <img
                    className="h-[23px] w-[23px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/pinlocation.svg"
                  />
                  <div className="flex-1 relative leading-[32px] inline-block min-w-[150px]">
                    <p className="m-0">1304 E Adams St.</p>
                    <p className="m-0">Brownsville, Tx. 78520</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-3 text-mini text-dimgray-300 font-poppins">
              <div className="self-stretch relative tracking-[1.4px] leading-[28px] mix-blend-normal z-[3]">
                SIGN UP FOR NEWSLETTER
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[17px] mq450:flex-wrap">
                <div className="flex-1 rounded-8xs border-black border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-[13px] min-w-[138px] min-h-[50px] z-[1]">
                  <input
                    className="w-[138.2px] [border:none] [outline:none] font-poppins text-sm bg-[transparent] relative text-dimgray-300 text-left inline-block mix-blend-normal p-0"
                    placeholder="Email address"
                    type="text"
                  />
                  <div className="h-[50px] w-[261px] relative rounded-8xs border-black border-[1px] border-solid box-border hidden" />
                </div>
                <button className="cursor-pointer [border:none] pt-3.5 pb-4 pl-6 pr-5 bg-black rounded-8xs overflow-hidden flex flex-row items-start justify-start z-[3] hover:bg-dimgray-200">
                  <div className="h-[49px] w-[120px] relative rounded-8xs bg-black hidden" />
                  <div className="relative text-base font-rubik text-white text-left z-[1]">
                    Subscirbe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-lavender flex flex-row items-start justify-start py-[15px] px-[802px] z-[3] text-center text-lg font-rubik mq925:pl-[200px] mq925:pr-[200px] mq925:box-border mq1350:pl-[401px] mq1350:pr-[401px] mq1350:box-border">
        <div className="flex-1 relative">
          © Copyright 2024 Pay My Lawyer LLC
        </div>
      </div>
    </footer>
  );
};

export default CredentialInputs;
